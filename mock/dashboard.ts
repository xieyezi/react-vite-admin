import { MockMethod } from 'vite-plugin-mock'

const firstChartLeftData = [
	{
		time: '2021-08-20',
		income: 10868,
		completeTime: 649.483
	},
	{
		time: '2021-08-21',
		income: 8786,
		completeTime: 1053.7
	},
	{
		time: '2021-08-22',
		income: 10824,
		completeTime: 679.817
	},
	{
		time: '2021-08-23',
		income: 7860,
		completeTime: 638.117
	},
	{
		time: '2021-08-24',
		income: 13253,
		completeTime: 843.3
	},
	{
		time: '2021-08-25',
		income: 17015,
		completeTime: 1092.983
	},
	{
		time: '2021-08-26',
		income: 19298,
		completeTime: 1036.317
	},
	{
		time: '2021-08-27',
		income: 13937,
		completeTime: 1031.9
	},
	{
		time: '2021-08-28',
		income: 11541,
		completeTime: 803.467
	},
	{
		time: '2021-08-29',
		income: 15244,
		completeTime: 830.733
	},
	{
		time: '2021-08-30',
		income: 14247,
		completeTime: 709.867
	},
	{
		time: '2021-08-31',
		income: 9402,
		completeTime: 665.233
	},
	{
		time: '2021-09-01',
		income: 10440,
		completeTime: 696.367
	},
	{
		time: '2021-09-02',
		income: 9345,
		completeTime: 692.867
	},
	{
		time: '2021-09-03',
		income: 18459,
		completeTime: 936.017
	},
	{
		time: '2021-09-04',
		income: 9763,
		completeTime: 782.867
	},
	{
		time: '2021-09-05',
		income: 11074,
		completeTime: 653.8
	},
	{
		time: '2021-09-06',
		income: 11770,
		completeTime: 856.683
	},
	{
		time: '2021-09-07',
		income: 12206,
		completeTime: 777.15
	},
	{
		time: '2021-09-08',
		income: 11434,
		completeTime: 773.283
	},
	{
		time: '2021-09-09',
		income: 16218,
		completeTime: 833.3
	},
	{
		time: '2021-09-10',
		income: 11914,
		completeTime: 793.517
	},
	{
		time: '2021-09-11',
		income: 16781,
		completeTime: 894.45
	},
	{
		time: '2021-09-12',
		income: 10555,
		completeTime: 725.55
	},
	{
		time: '2021-09-13',
		income: 10899,
		completeTime: 709.967
	},
	{
		time: '2021-09-14',
		income: 10713,
		completeTime: 787.6
	},
	{
		time: '2021-09-15',
		income: 8884.83,
		completeTime: 644.183
	},
	{
		time: '2021-09-16',
		income: 5333.45,
		completeTime: 1066.65
	},
	{
		time: '2021-09-17',
		income: 20357,
		completeTime: 932.45
	},
	{
		time: '2021-09-18',
		income: 10424,
		completeTime: 753.583
	}
]

type firstChartLeftDataType = typeof firstChartLeftData

export type { firstChartLeftDataType }

export default [
	{
		url: '/api/dashboard',
		method: 'get',
		timeout: 1000,
		response: {
			code: 200,
			data: {
				firstChartLeftData
			}
		}
	}
] as MockMethod[]
