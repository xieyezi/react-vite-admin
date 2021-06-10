import create from 'zustand'

export type TagItem = {
	id: string
	path: string
	closable: boolean
}

export interface TagState {
	tags: Array<TagItem>
	activeTagId: TagItem['id']
	setActiveTag: (tag: string) => void
	addTag: (tagItem: TagItem) => void
	removetTag: (tagItem: TagItem) => void
	removeOtherTag: () => void
	removeAllTag: () => void
}

const useStore = create<TagState>((set, get) => ({
	tags: [],
	activeTagId: '0',
	setActiveTag: (tag) => set({ activeTagId: tag }),
	addTag: (tagItem) => {
		const { tags, setActiveTag } = get()
		set({ tags: [...tags, tagItem] })
		setActiveTag(tagItem.id)
	},
	removetTag: (tagItem) => {
		const { tags, activeTagId } = get()
		const targetKey = tagItem.id
		// 首页不能被关闭
		if (targetKey === tags[0].id) {
			return
		}
		const tagList = tags.filter((tag) => tag.id !== targetKey)
		if (tagList.length) {
			if (activeTagId === targetKey) {
				const index = tags.findIndex((e) => e.id == activeTagId)
				set({
					activeTagId: tags[index - 1].id,
					tags: tagList
				})
			} else {
				set({
					tags: tagList
				})
			}
		}
	},
	removeOtherTag: () => {
		const { tags, activeTagId } = get()
		const activeTag = tags.find((tag) => tag.id === activeTagId) as TagItem
		const activeIsDashboard = activeTag?.id === tags[0].id

		set({
			tags: activeIsDashboard ? [tags[0]] : [tags[0], activeTag]
		})
	},
	removeAllTag: () =>
		set((state) => ({
			tags: [state.tags[0]],
			activeTagId: state.tags[0].id
		}))
}))

export default useStore
