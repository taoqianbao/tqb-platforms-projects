(function($) {
	'use strict';

	$(function() {


		// 路径配置
		require.config({
			paths: {
				echarts: './assets/js/echarts/dist'
			},
			packages: [{
				name: 'BMap',
				location: './assets/js/echarts/extension',
				main: 'main'
			}]
		});

		require(
			[
				'echarts',
				'echarts/theme/shine',
				'BMap',
				'echarts/chart/line',
				'echarts/chart/bar',
				//'echarts/chart/scatter',
				//'echarts/chart/k',
				//'echarts/chart/pie',
				//'echarts/chart/radar',
				//'echarts/chart/force',
				//'echarts/chart/chord',
				//'echarts/chart/gauge',
				//'echarts/chart/funnel',
				//'echarts/chart/eventRiver',
				//'echarts/chart/venn',
				//'echarts/chart/treemap',
				//'echarts/chart/tree',
				//'echarts/chart/wordCloud',
				//'echarts/chart/heatmap',
				'echarts/chart/map'
			],
			requireCallback
		);

		function requireCallback(ec, defaultTheme, BMapExtension) {

			$('#mainChart').css({
            height:$(window).height(),
            width: $(window).width()
        });


			// 初始化地图
			// 初始化地图
			var BMapExt = new BMapExtension($('#mainChart')[0], BMap, ec, {
				enableMapClick: false
			});
			var map = BMapExt.getMap();
			var container = BMapExt.getEchartsContainer();

			var startPoint = {
				x: 121.589755,
				y: 31.205753
			};

			var point = new BMap.Point(startPoint.x, startPoint.y);
			map.centerAndZoom(point, 11);
			map.enableScrollWheelZoom(true);
			
            // 地图自定义样式
			map.setMapStyle({
				styleJson: [{
					"featureType": "water",
					"elementType": "all",
					"stylers": {
						"color": "#044161"
					}
				}, {
					"featureType": "land",
					"elementType": "all",
					"stylers": {
						"color": "#004981"
					}
				}, {
					"featureType": "boundary",
					"elementType": "geometry",
					"stylers": {
						"color": "#064f85"
					}
				}, {
					"featureType": "railway",
					"elementType": "all",
					"stylers": {
						"visibility": "off"
					}
				}, {
					"featureType": "highway",
					"elementType": "geometry",
					"stylers": {
						"color": "#004981"
					}
				}, {
					"featureType": "highway",
					"elementType": "geometry.fill",
					"stylers": {
						"color": "#005b96",
						"lightness": 1
					}
				}, {
					"featureType": "highway",
					"elementType": "labels",
					"stylers": {
						"visibility": "off"
					}
				}, {
					"featureType": "arterial",
					"elementType": "geometry",
					"stylers": {
						"color": "#004981"
					}
				}, {
					"featureType": "arterial",
					"elementType": "geometry.fill",
					"stylers": {
						"color": "#00508b"
					}
				}, {
					"featureType": "poi",
					"elementType": "all",
					"stylers": {
						"visibility": "off"
					}
				}, {
					"featureType": "green",
					"elementType": "all",
					"stylers": {
						"color": "#056197",
						"visibility": "off"
					}
				}, {
					"featureType": "subway",
					"elementType": "all",
					"stylers": {
						"visibility": "off"
					}
				}, {
					"featureType": "manmade",
					"elementType": "all",
					"stylers": {
						"visibility": "off"
					}
				}, {
					"featureType": "local",
					"elementType": "all",
					"stylers": {
						"visibility": "off"
					}
				}, {
					"featureType": "arterial",
					"elementType": "labels",
					"stylers": {
						"visibility": "off"
					}
				}, {
					"featureType": "boundary",
					"elementType": "geometry.fill",
					"stylers": {
						"color": "#029fd4"
					}
				}, {
					"featureType": "building",
					"elementType": "all",
					"stylers": {
						"color": "#1a5787"
					}
				}, {
					"featureType": "label",
					"elementType": "all",
					"stylers": {
						"visibility": "off"
					}
				}]
			});

			var option = {
				color: ['gold', 'aqua', 'lime'],
				title: {
					text: '恒昌上海职场分布图',
					subtext: '恒昌技术中心',
					x: 'right'
				},
				tooltip: {
					trigger: 'item',
					formatter: function(v) {
						return v[1].replace(':', ' > ');
					}
				},
				legend: {
					orient: 'vertical',
					x: 'left',
					data: ['上海'],
					selectedMode: 'single',
					selected: {
						'上海': true
					}
				},
				toolbox: {
					show: true,
					orient: 'vertical',
					x: 'right',
					y: 'center',
					feature: {
						mark: {
							show: true
						},
						dataView: {
							show: true,
							readOnly: false
						},
						restore: {
							show: true
						},
						saveAsImage: {
							show: true
						}
					}
				},
				dataRange: {
					min: 0,
					max: 100,
					y: '60%',
					calculable: true,
					color: ['#ff3333', 'orange', 'yellow', 'lime', 'aqua']
				},
				series: [{
						name: '上海',
						type: 'map',
						mapType: 'none',
						data: [],
						geoCoord: {
							"张江张江张江":[121.592771,31.205762],
                            "上海第一分公司（财富）静安区第一营业部静安区南京西路1266号恒隆广场1期3507室":[121.460475,31.23366],
                            "上海第一分公司（财富）金山区第三营业部金山区枫泾镇泾波路156弄1号":[121.022398,30.900397],
                            "上海第一分公司（财富）奉贤区第四营业部奉贤区南桥镇城乡路188号亿星大厦291号-293号":[121.467494,30.92149],
                            "上海第一分公司（财富）松江区第五营业部上海市松江区中山中路79弄9号平高商务中心20层14-16室":[121.242157,31.012565],
                            "上海第二分公司（财富）徐汇区第一营业部徐汇区淮海中路1010号嘉华中心3905-3906室":[121.462592,31.222165],
                            "上海第二分公司（财富）黄浦区第二营业部黄浦区太仓路233号901-903室":[121.480108,31.226797],
                            "上海第二分公司（财富）宝山区第二营业部宝山区一二八纪念路928号606、607、608室":[121.453924,31.330394],
                            "上海第二分公司（财富）杨浦区第三营业部杨浦区大连路588、688号B座22层03、04室":[121.518962,31.266754],
                            "上海第二分公司（财富）浦东新区第四营业部浦东新区世纪大道1777号东方希望大厦3楼EF单元":[121.544351,31.2297],
                            "上海第三分公司（财富）黄浦区第一营业部黄浦区徐家汇路610号日月光中心2907-10室":[121.475099,31.211835],
                            "上海第三分公司（财富）虹口区第五营业部虹口区四川北路1350号申虹大厦2501-02室":[121.490991,31.25876],
                            "上海第三分公司（财富）嘉定第一营业部嘉定区福海路734号一楼":[121.249126,31.370893],
                            "上海第四分公司（财富）静安区第一第二第八营业部上海市静安区北京西路968号嘉地中心11层":[121.462761,31.237519],
                            "上海第四分公司（财富）长宁区第三第四第五第七营业部上海市长宁区红宝石路500号东银中心A15楼":[121.406306,31.203912],
                            "上海第五分公司（财富）黄浦区第一第三营业部黄浦区马当路388号SOHO复兴广场A座2701-05":[121.480724,31.220497],
                            "上海第五分公司（财富）普陀区第四营业部普陀区中山北路3300号上海月星环球港27DE单元":[121.418006,31.237944],
                            "上海第五分公司（财富）浦东新区第五营业部上海市浦东新区浦东南路999号新梅联合广场28楼CDE单元":[121.522812,31.235497],
                            "上海第六分公司（财富）静安区第一二营业部静安区南京西路688号（688职场）2106-07":[121.471194,31.237241],
                            "上海第八分公司（财富）黄浦区第一营业部上海市黄浦区南京西路288号创兴金融中心3205-06室":[121.476851,31.238121],
                            "上海第八分公司（财富）嘉定区第三营业部上海市嘉定区沪宜公路3099号绿地嘉创国际商务广场1008-1009":[121.264142,31.373784],
                            "上海第八分公司（财富）南汇区第三营业部上海市南汇区惠南镇城东路761号":[121.769186,31.056643],
                            "上海第九分公司（财富）长宁区第一营业部长宁区娄山关路523号金虹桥国际中心1206单元":[121.409843,31.214529],
                            "上海第十分公司（财富）黄浦区第一三四营业部黄浦区淮海中路300号香港新世界大厦1303室":[121.480126,31.229507],
                            "上海第十一分公司（财富）徐汇区第一营业部徐汇区虹桥路500号中城国际大厦29层":[121.435736,31.199511],
                            "上海第十一分公司（财富）闵行区第二营业部闵行区沪闵路6088号凯德龙之梦36F06-11室":[121.384141,31.113957],
                            "上海第十二分公司（财富）浦东新区第一营业部浦东新区年家浜路417号":[121.578995,31.120248],
                            "上海第十二分公司（财富）虹口区第二营业部虹口区汶水东路351号1号1楼":[121.488586,31.296505],
                            "上海第十二分公司（财富）闸北区第三第四第五营业部闸北区裕通路100号宝矿洲际商务中心4706-7室":[121.460043,31.250594],
                            "上海第十三分公司（财富）黄浦区第一营业部黄浦区延安东路222号金光外滩金融中心1501室":[121.494224,31.238083],
                            "北京恒昌好车电子商务股份有限公司上海分公司汽车金融-华东管理中心上海市闸北区灵石路658号105室     ":[121.452172,31.289053],
                            "国开行（消费金融）国开行-消费金融国开行（消费金融）":[121.517222,31.242706],
                            "惠诚(上海分中心1)上海分中心1管理部上海市黄浦区金融广场1801室":[121.489684,31.241471],
                            "惠诚(上海分中心1)上海市黄浦区第二营业部上海市黄浦区西藏中路18号1406-07室":[121.48513,31.23515],
                            "惠诚(上海分中心1)上海市闵行区第十营业部上海市闵行区莘松路58号2号楼302室":[121.383572,31.114475],
                            "惠诚(上海分中心1)上海市普陀区第八营业部上海市普陀区铜川路70号新城中心广场1702,1703室":[121.425501,31.261144],
                            "惠诚(上海分中心1)上海市徐汇区第四营业部上海市徐汇区柳州路928号1006室":[121.427126,31.191974],
                            "惠诚(上海分中心1)闸北区第六营业部上海市静安区愚园路108号402、403室":[121.452059,31.231097],
                            "惠诚(上海分中心2)上海分中心2管理部上海市黄浦区九江路333号1805室":[121.489684,31.241471],
                            "惠诚(上海分中心2)上海市第十一营业部上海市黄浦区九江路333号1801室":[121.489684,31.241471],
                            "惠诚(上海分中心2)上海市虹口区第三营业部上海市杨浦区大连路588号宝地广场B座2005室":[121.518625,31.266886],
                            "惠诚(上海分中心2)上海市黄浦区第一营业部上海市黄浦区九江路333号1801室":[121.489684,31.241471],
                            "惠诚(上海分中心2)上海市浦东新区第七营业部上海市浦东新区张杨路560号中融恒瑞大厦西楼1503室":[121.525671,31.233505],
                            "惠诚(上海分中心2)上海市浦东新区第五营业部上海市闸北区裕通路100号宝矿洲际商务中心3706室":[121.460043,31.250594],
                            "惠诚(上海分中心2)上海市长宁区第九营业部上海市长宁区仙霞路333号8层A1室":[121.405099,31.212205]
						},

						markLine: {
							smooth: true,
							effect: {
								show: true,
								scaleSize: 1,
								period: 30,
								color: '#fff',
								shadowBlur: 10
							},
							itemStyle: {
								normal: {
									borderWidth: 1,
									lineStyle: {
										type: 'solid',
										shadowBlur: 10
									}
								}
							},
							data: [
								[{
									name: '张江张江张江'
								}, {
									name: '上海第一分公司（财富）静安区第一营业部静安区南京西路1266号恒隆广场1期3507室',
									value: 37
								}],
								[{
									name: '张江张江张江'
								}, {
									name: '上海第一分公司（财富）金山区第三营业部金山区枫泾镇泾波路156弄1号',
									value: 36
								}],
								[{
									name: '张江张江张江'
								}, {
									name: '上海第一分公司（财富）奉贤区第四营业部奉贤区南桥镇城乡路188号亿星大厦291号-293号',
									value: 32
								}]
							]
						},
						markPoint: {
							symbol: 'emptyCircle',
							symbolSize: function(v) {
								return 10 + v / 10
							},
							effect: {
								show: true,
								shadowBlur: 0
							},
							itemStyle: {
								normal: {
									label: {
										show: false
									}
								}
							},
							data: [
                                
{name:"张江张江张江",value:100},
{name:"上海第一分公司（财富）静安区第一营业部静安区南京西路1266号恒隆广场1期3507室",value:37},
{name:"上海第一分公司（财富）金山区第三营业部金山区枫泾镇泾波路156弄1号",value:36},
{name:"上海第一分公司（财富）奉贤区第四营业部奉贤区南桥镇城乡路188号亿星大厦291号-293号",value:32},
{name:"上海第一分公司（财富）松江区第五营业部上海市松江区中山中路79弄9号平高商务中心20层14-16室",value:14},
{name:"上海第二分公司（财富）徐汇区第一营业部徐汇区淮海中路1010号嘉华中心3905-3906室",value:72},
{name:"上海第二分公司（财富）黄浦区第二营业部黄浦区太仓路233号901-903室",value:0},
{name:"上海第二分公司（财富）宝山区第二营业部宝山区一二八纪念路928号606、607、608室",value:17},
{name:"上海第二分公司（财富）杨浦区第三营业部杨浦区大连路588、688号B座22层03、04室",value:36},
{name:"上海第二分公司（财富）浦东新区第四营业部浦东新区世纪大道1777号东方希望大厦3楼EF单元",value:20},
{name:"上海第三分公司（财富）黄浦区第一营业部黄浦区徐家汇路610号日月光中心2907-10室",value:37},
{name:"上海第三分公司（财富）虹口区第五营业部虹口区四川北路1350号申虹大厦2501-02室",value:34},
{name:"上海第三分公司（财富）嘉定第一营业部嘉定区福海路734号一楼",value:8},
{name:"上海第四分公司（财富）静安区第一第二第八营业部上海市静安区北京西路968号嘉地中心11层",value:83},
{name:"上海第四分公司（财富）长宁区第三第四第五第七营业部上海市长宁区红宝石路500号东银中心A15楼",value:111},
{name:"上海第五分公司（财富）黄浦区第一第三营业部黄浦区马当路388号SOHO复兴广场A座2701-05",value:84},
{name:"上海第五分公司（财富）普陀区第四营业部普陀区中山北路3300号上海月星环球港27DE单元",value:19},
{name:"上海第五分公司（财富）浦东新区第五营业部上海市浦东新区浦东南路999号新梅联合广场28楼CDE单元",value:32},
{name:"上海第六分公司（财富）静安区第一二营业部静安区南京西路688号（688职场）2106-07",value:42},
{name:"上海第八分公司（财富）黄浦区第一营业部上海市黄浦区南京西路288号创兴金融中心3205-06室",value:66},
{name:"上海第八分公司（财富）嘉定区第三营业部上海市嘉定区沪宜公路3099号绿地嘉创国际商务广场1008-1009",value:12},
{name:"上海第八分公司（财富）南汇区第三营业部上海市南汇区惠南镇城东路761号",value:9},
{name:"上海第九分公司（财富）长宁区第一营业部长宁区娄山关路523号金虹桥国际中心1206单元",value:32},
{name:"上海第十分公司（财富）黄浦区第一三四营业部黄浦区淮海中路300号香港新世界大厦1303室",value:48},
{name:"上海第十一分公司（财富）徐汇区第一营业部徐汇区虹桥路500号中城国际大厦29层",value:42},
{name:"上海第十一分公司（财富）闵行区第二营业部闵行区沪闵路6088号凯德龙之梦36F06-11室",value:20},
{name:"上海第十二分公司（财富）浦东新区第一营业部浦东新区年家浜路417号",value:29},
{name:"上海第十二分公司（财富）虹口区第二营业部虹口区汶水东路351号1号1楼",value:19},
{name:"上海第十二分公司（财富）闸北区第三第四第五营业部闸北区裕通路100号宝矿洲际商务中心4706-7室",value:65},
{name:"上海第十三分公司（财富）黄浦区第一营业部黄浦区延安东路222号金光外滩金融中心1501室",value:52},
{name:"北京恒昌好车电子商务股份有限公司上海分公司汽车金融-华东管理中心上海市闸北区灵石路658号105室     ",value:14},
{name:"国开行（消费金融）国开行-消费金融国开行（消费金融）",value:100},
{name:"惠诚(上海分中心1)上海分中心1管理部上海市黄浦区金融广场1801室",value:8},
{name:"惠诚(上海分中心1)上海市黄浦区第二营业部上海市黄浦区西藏中路18号1406-07室",value:15},
{name:"惠诚(上海分中心1)上海市闵行区第十营业部上海市闵行区莘松路58号2号楼302室",value:16},
{name:"惠诚(上海分中心1)上海市普陀区第八营业部上海市普陀区铜川路70号新城中心广场1702,1703室",value:21},
{name:"惠诚(上海分中心1)上海市徐汇区第四营业部上海市徐汇区柳州路928号1006室",value:16},
{name:"惠诚(上海分中心1)闸北区第六营业部上海市静安区愚园路108号402、403室",value:16},
{name:"惠诚(上海分中心2)上海分中心2管理部上海市黄浦区九江路333号1805室",value:10},
{name:"惠诚(上海分中心2)上海市第十一营业部上海市黄浦区九江路333号1801室",value:7},
{name:"惠诚(上海分中心2)上海市虹口区第三营业部上海市杨浦区大连路588号宝地广场B座2005室",value:16},
{name:"惠诚(上海分中心2)上海市黄浦区第一营业部上海市黄浦区九江路333号1801室",value:16},
{name:"惠诚(上海分中心2)上海市浦东新区第七营业部上海市浦东新区张杨路560号中融恒瑞大厦西楼1503室",value:16},
{name:"惠诚(上海分中心2)上海市浦东新区第五营业部上海市闸北区裕通路100号宝矿洲际商务中心3706室",value:14},
{name:"惠诚(上海分中心2)上海市长宁区第九营业部上海市长宁区仙霞路333号8层A1室",value:16}
                                
                            ]
						}

					}

				]
			};

			var myChart = BMapExt.initECharts(container, defaultTheme);
			window.onresize = myChart.resize;
			BMapExt.setOption(option, true);
		}

	});

})(jQuery);