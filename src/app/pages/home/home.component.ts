import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
declare var $: any;
import { Router } from '@angular/router';
declare var Chartist: any;
declare var $: any;
import { Options } from '@angular-slider/ngx-slider';
import { CdkDragDrop, moveItemInArray, transferArrayItem, copyArrayItem } from '@angular/cdk/drag-drop';
// import { ClrDragEvent } from '@clr/angular';

import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexResponsive,
  ApexXAxis,
  ApexLegend,
  ApexFill,
  ApexYAxis,
  ApexStroke,
  ApexTooltip,
  ApexTitleSubtitle,
  ApexGrid,
  ApexMarkers,
  ApexNonAxisChartSeries,
  ChartType,

} from "ng-apexcharts";


export type ChartOptions = {
  series: ApexAxisChartSeries;
  series_enrgy: ApexNonAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
  xaxis: ApexXAxis;
  legend: ApexLegend;
  fill: ApexFill;
  yaxis: ApexYAxis;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  colors: string[];
  title: ApexTitleSubtitle;
  grid: ApexGrid;
  markers: ApexMarkers;
  labels: any;
  toolbar: any;



  // fill: any;
  // colors: any;
};

interface File {
  name: string;
}

export type ChartOptions_2 = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
naturalGasVolume:number;
  //  grouped = mockData.Sheet1.forEach(x=>x.Date (

  //  ));
  //   //create your grouping key, by which you want to group the items
  //   // const groupingKey = `${current.workT} - ${current.workTypeDesc}`;
  //   // //if the group does not yet have an entry for this key, init it to empty array
  //   // group[groupingKey] = group[groupingKey] || [];
  //   // //add the current item to the group
  //   // group[groupingKey].push(current);
  //   // return group;
  //   }, {});

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  @ViewChild("chart_id") chart_id: ChartComponent;
  public chartOptions_gas: Partial<ChartOptions>;

  @ViewChild("chart_energy") chart_energy: ChartComponent;
  public chartOptions_energy: Partial<ChartOptions_2>;

  @ViewChild("chart_heatmap") chart_heatmap: ChartComponent;
  public chartOptions_heatmap: Partial<ChartOptions>;



  @ViewChild("chart_wave", { static: false }) chart_wave: ChartComponent;
  public chartOptions_wave: Partial<ChartOptions>;
  public activeOptionButton = "all";

  public updateOptionsData = {
    "1m": {
      xaxis: {
        min: new Date("28 Jan 2013").getTime(),
        max: new Date("27 Feb 2013").getTime()
      }
    },
    "6m": {
      xaxis: {
        min: new Date("27 Sep 2012").getTime(),
        max: new Date("27 Feb 2013").getTime()
      }
    },
    "1y": {
      xaxis: {
        min: new Date("27 Feb 2012").getTime(),
        max: new Date("27 Feb 2013").getTime()
      }
    },
    "1yd": {
      xaxis: {
        min: new Date("01 Jan 2013").getTime(),
        max: new Date("27 Feb 2013").getTime()
      }
    },
    all: {
      xaxis: {
        min: undefined,
        max: undefined
      }
    }
  };

  clicked_data: any;



  icon = [
    {
      chartType: 'line',
      icons: 'ion ion-ios-pulse'
    },

    {
      chartType: 'bar',
      icons: 'fa fa-chart-bar'
    },
  
    {
      chartType: 'area',
      icons: 'fa fa-chart-area'
    },

   
    {
      chartType: 'line',
      icons: 'fa fa-chart-line'
    },
    
  ]

  destination = [];


  origin = [
    { title: 'Text', type: 'text' },
    { title: 'Number', type: 'number' },
    { title: 'Dropdown', type: 'select' },
    { title: 'Radio', type: 'radio' },
    { title: 'Checkbox', type: 'check' },
    { title: 'Date', type: 'date' },
  ];

  data_price = [
    {
      price: 13
    },
    {
      price: 13
    },
    {
      price: 13
    },
    {
      price: 13
    },
    {
      price: 13
    },
    {
      price: 13
    },
    {
      price: 177
    },

  ]

  finalArray: any;


  data = [
    [1327359600000, 30.95],
    [1327446000000, 31.34],
    [1327532400000, 31.18],
    [1327618800000, 31.05],
    [1327878000000, 31.0],
    [1327964400000, 30.95],
    [1328050800000, 31.24],
    [1328137200000, 31.29],
    [1328223600000, 31.85],
    [1328482800000, 31.86],
    [1328569200000, 32.28],
    [1328655600000, 32.1],
    [1328742000000, 32.65],
    [1328828400000, 32.21],
    [1329087600000, 32.35],
    [1329174000000, 32.44],
    [1329260400000, 32.46],
    [1329346800000, 32.86],
    [1329433200000, 32.75],
    [1329778800000, 32.54],
    [1329865200000, 32.33],
    [1329951600000, 32.97],
    [1330038000000, 33.41],
    [1330297200000, 33.27],
    [1330383600000, 33.27],
    [1330470000000, 32.89],
    [1330556400000, 33.1],
    [1330642800000, 33.73],
    [1330902000000, 33.22],
    [1330988400000, 31.99],
    [1331074800000, 32.41],
    [1331161200000, 33.05],
    [1331247600000, 33.64],
    [1331506800000, 33.56],
    [1331593200000, 34.22],
    [1331679600000, 33.77],
    [1331766000000, 34.17],
    [1331852400000, 33.82],
    [1332111600000, 34.51],
    [1332198000000, 33.16],
    [1332284400000, 33.56],
    [1332370800000, 33.71],
    [1332457200000, 33.81],
    [1332712800000, 34.4],
    [1332799200000, 34.63],
    [1332885600000, 34.46],
    [1332972000000, 34.48],
    [1333058400000, 34.31],
    [1333317600000, 34.7],
    [1333404000000, 34.31],
    [1333490400000, 33.46],
    [1333576800000, 33.59],
    [1333922400000, 33.22],
    [1334008800000, 32.61],
    [1334095200000, 33.01],
    [1334181600000, 33.55],
    [1334268000000, 33.18],
    [1334527200000, 32.84],
    [1334613600000, 33.84],
    [1334700000000, 33.39],
    [1334786400000, 32.91],
    [1334872800000, 33.06],
    [1335132000000, 32.62],
    [1335218400000, 32.4],
    [1335304800000, 33.13],
    [1335391200000, 33.26],
    [1335477600000, 33.58],
    [1335736800000, 33.55],
    [1335823200000, 33.77],
    [1335909600000, 33.76],
    [1335996000000, 33.32],
    [1336082400000, 32.61],
    [1336341600000, 32.52],
    [1336428000000, 32.67],
    [1336514400000, 32.52],
    [1336600800000, 31.92],
    [1336687200000, 32.2],
    [1336946400000, 32.23],
    [1337032800000, 32.33],
    [1337119200000, 32.36],
    [1337205600000, 32.01],
    [1337292000000, 31.31],
    [1337551200000, 32.01],
    [1337637600000, 32.01],
    [1337724000000, 32.18],
    [1337810400000, 31.54],
    [1337896800000, 31.6],
    [1338242400000, 32.05],
    [1338328800000, 31.29],
    [1338415200000, 31.05],
    [1338501600000, 29.82],
    [1338760800000, 30.31],
    [1338847200000, 30.7],
    [1338933600000, 31.69],
    [1339020000000, 31.32],
    [1339106400000, 31.65],
    [1339365600000, 31.13],
    [1339452000000, 31.77],
    [1339538400000, 31.79],
    [1339624800000, 31.67],
    [1339711200000, 32.39],
    [1339970400000, 32.63],
    [1340056800000, 32.89],
    [1340143200000, 31.99],
    [1340229600000, 31.23],
    [1340316000000, 31.57],
    [1340575200000, 30.84],
    [1340661600000, 31.07],
    [1340748000000, 31.41],
    [1340834400000, 31.17],
    [1340920800000, 32.37],
    [1341180000000, 32.19],
    [1341266400000, 32.51],
    [1341439200000, 32.53],
    [1341525600000, 31.37],
    [1341784800000, 30.43],
    [1341871200000, 30.44],
    [1341957600000, 30.2],
    [1342044000000, 30.14],
    [1342130400000, 30.65],
    [1342389600000, 30.4],
    [1342476000000, 30.65],
    [1342562400000, 31.43],
    [1342648800000, 31.89],
    [1342735200000, 31.38],
    [1342994400000, 30.64],
    [1343080800000, 30.02],
    [1343167200000, 30.33],
    [1343253600000, 30.95],
    [1343340000000, 31.89],
    [1343599200000, 31.01],
    [1343685600000, 30.88],
    [1343772000000, 30.69],
    [1343858400000, 30.58],
    [1343944800000, 32.02],
    [1344204000000, 32.14],
    [1344290400000, 32.37],
    [1344376800000, 32.51],
    [1344463200000, 32.65],
    [1344549600000, 32.64],
    [1344808800000, 32.27],
    [1344895200000, 32.1],
    [1344981600000, 32.91],
    [1345068000000, 33.65],
    [1345154400000, 33.8],
    [1345413600000, 33.92],
    [1345500000000, 33.75],
    [1345586400000, 33.84],
    [1345672800000, 33.5],
    [1345759200000, 32.26],
    [1346018400000, 32.32],
    [1346104800000, 32.06],
    [1346191200000, 31.96],
    [1346277600000, 31.46],
    [1346364000000, 31.27],
    [1346709600000, 31.43],
    [1346796000000, 32.26],
    [1346882400000, 32.79],
    [1346968800000, 32.46],
    [1347228000000, 32.13],
    [1347314400000, 32.43],
    [1347400800000, 32.42],
    [1347487200000, 32.81],
    [1347573600000, 33.34],
    [1347832800000, 33.41],
    [1347919200000, 32.57],
    [1348005600000, 33.12],
    [1348092000000, 34.53],
    [1348178400000, 33.83],
    [1348437600000, 33.41],
    [1348524000000, 32.9],
    [1348610400000, 32.53],
    [1348696800000, 32.8],
    [1348783200000, 32.44],
    [1349042400000, 32.62],
    [1349128800000, 32.57],
    [1349215200000, 32.6],
    [1349301600000, 32.68],
    [1349388000000, 32.47],
    [1349647200000, 32.23],
    [1349733600000, 31.68],
    [1349820000000, 31.51],
    [1349906400000, 31.78],
    [1349992800000, 31.94],
    [1350252000000, 32.33],
    [1350338400000, 33.24],
    [1350424800000, 33.44],
    [1350511200000, 33.48],
    [1350597600000, 33.24],
    [1350856800000, 33.49],
    [1350943200000, 33.31],
    [1351029600000, 33.36],
    [1351116000000, 33.4],
    [1351202400000, 34.01],
    [1351638000000, 34.02],
    [1351724400000, 34.36],
    [1351810800000, 34.39],
    [1352070000000, 34.24],
    [1352156400000, 34.39],
    [1352242800000, 33.47],
    [1352329200000, 32.98],
    [1352415600000, 32.9],
    [1352674800000, 32.7],
    [1352761200000, 32.54],
    [1352847600000, 32.23],
    [1352934000000, 32.64],
    [1353020400000, 32.65],
    [1353279600000, 32.92],
    [1353366000000, 32.64],
    [1353452400000, 32.84],
    [1353625200000, 33.4],
    [1353884400000, 33.3],
    [1353970800000, 33.18],
    [1354057200000, 33.88],
    [1354143600000, 34.09],
    [1354230000000, 34.61],
    [1354489200000, 34.7],
    [1354575600000, 35.3],
    [1354662000000, 35.4],
    [1354748400000, 35.14],
    [1354834800000, 35.48],
    [1355094000000, 35.75],
    [1355180400000, 35.54],
    [1355266800000, 35.96],
    [1355353200000, 35.53],
    [1355439600000, 37.56],
    [1355698800000, 37.42],
    [1355785200000, 37.49],
    [1355871600000, 38.09],
    [1355958000000, 37.87],
    [1356044400000, 37.71],
    [1356303600000, 37.53],
    [1356476400000, 37.55],
    [1356562800000, 37.3],
    [1356649200000, 36.9],
    [1356908400000, 37.68],
    [1357081200000, 38.34],
    [1357167600000, 37.75],
    [1357254000000, 38.13],
    [1357513200000, 37.94],
    [1357599600000, 38.14],
    [1357686000000, 38.66],
    [1357772400000, 38.62],
    [1357858800000, 38.09],
    [1358118000000, 38.16],
    [1358204400000, 38.15],
    [1358290800000, 37.88],
    [1358377200000, 37.73],
    [1358463600000, 37.98],
    [1358809200000, 37.95],
    [1358895600000, 38.25],
    [1358982000000, 38.1],
    [1359068400000, 38.32],
    [1359327600000, 38.24],
    [1359414000000, 38.52],
    [1359500400000, 37.94],
    [1359586800000, 37.83],
    [1359673200000, 38.34],
    [1359932400000, 38.1],
    [1360018800000, 38.51],
    [1360105200000, 38.4],
    [1360191600000, 38.07],
    [1360278000000, 39.12],
    [1360537200000, 38.64],
    [1360623600000, 38.89],
    [1360710000000, 38.81],
    [1360796400000, 38.61],
    [1360882800000, 38.63],
    [1361228400000, 38.99],
    [1361314800000, 38.77],
    [1361401200000, 38.34],
    [1361487600000, 38.55],
    [1361746800000, 38.11],
    [1361833200000, 38.59],
    [1361919600000, 39.6]
  ];



  SDDL = {
    singleSelection: false,
    idField: 'item_id',
    textField: 'item_text',
    enableCheckAll: false,
    itemsShowLimit: 1,
    allowSearchFilter: false,
    closeDropDownOnSelection: true,
  };

  SDDL1 = {
    singleSelection: false,
    idField: 'item_id',
    textField: 'item_text',
    enableCheckAll: false,
    itemsShowLimit: 1,
    allowSearchFilter: false,
    closeDropDownOnSelection: true,
  };

  Year_Data = [
    // { item_id: 0, item_text: 'Banners' },
    { item_id: 1, item_text: '2022' }
    // { item_id: 2, item_text: '2023' },
    // { item_id: 3, item_text: '2024' },
    // { item_id: 4, item_text: '2025' },
    // { item_id: 5, item_text: '2026' },
    // { item_id: 6, item_text: '2027' },
    // { item_id: 7, item_text: '2028' },
    // { item_id: 8, item_text: '2029' },
    // { item_id: 9, item_text: '2030' }
  ];


  Column_Names = [];

  Activity = [
    { item_id: 0, item_text: 'Natural Gas Volume (scf)' },
    { item_id: 1, item_text: 'Power Generated' },
    { item_id: 2, item_text: 'Pumps' },
    { item_id: 3, item_text: 'Subsea' },
    { item_id: 4, item_text: 'Desalinization' },
    { item_id: 5, item_text: 'Rig Operations' },
    { item_id: 6, item_text: 'Living' },
    { item_id: 7, item_text: 'Emission Power' }
  ]

  DDLCategory = [
    { item_id: 0, item_text: 'Sheet1' },
    { item_id: 1, item_text: 'Large Dataset' },
    { item_id: 2, item_text: 'Sheet3' },
    { item_id: 3, item_text: 'Sheet2' },
  ]
  


  ActivityX = [
    { item_id: 13, item_text: '2022' }
  ]

  files = [
    { name: 'yuegfuy' },
    { name: 'asf' },
    { name: 'rthfhdhh' }
  ];

  droppedFiles: File[] = [];

  // Production_Data = [
  //   { item_id: 0, item_text: 'OIL PRODUCTION' },
  //   { item_id: 1, item_text: 'GAS PRODUCTION' },
  //   { item_id: 2, item_text: 'ITHACA ENERGY PRODUCTION' },
  // ]

  AddEmployeeForm: FormGroup;
  Submitted: boolean;


  originalSeries: any = [];

  onCategorySelection(item: any): void {
    if (this.chartOptions.xaxis.categories.indexOf(item.item_text) == -1)
      this.chartOptions.xaxis.categories.push(item.item_text);
  }

  onXAxisItemSelection(item: any): void {
    if (this.chartOptions.xaxis.categories.indexOf(item.item_text) == -1)
      this.chartOptions.xaxis.categories.push(item.item_text);
  }
  onXAxisItemDeSelection(item: any): void {
    if (this.chartOptions.xaxis.categories.indexOf(item.item_text) > -1)
      this.chartOptions.xaxis.categories = this.chartOptions.xaxis.categories.filter(x => x != item.item_text);
  }
  onYAxisItemSelection(item: any): void {
    this.chartOptions.series = [...this.chartOptions.series, ...this.originalSeries.filter(x => x.name == item.item_text)];
  }
  onYAxisItemDeSelection(item: any): void {
    this.chartOptions.series = this.chartOptions.series.filter(x => x.name != item.item_text);
  }
  changeChartType(chartType: ChartType): void {
    this.chartOptions.chart.type = chartType;
    this.chart.updateOptions(this.chartOptions, true);
  }
  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) {








  }

  bindColumnNames(sheetData: Array<any>): void {
    this.Column_Names = Object.keys(sheetData[0]).map(value => { return { name: value }; });
  }
  createChartData(sheetData: Array<any>): void {
    let names = this.Activity.map(x => x.item_text);
    names.forEach((value, index, array) => {
      if (sheetData[0].hasOwnProperty(value)) {
        let data = sheetData.map(x => x[value]);
        this.originalSeries.push({
          name: value,
          data: data
        });
      }
    });
  }
  ngOnInit(): void {
    // const d = new Date();
    // console.log(d);
    fetch('/assets/plancktondata.json')
      .then(res => res.json())
      .then(res => {
        let sheet = res['Sheet1']; this.bindColumnNames(sheet); this.createChartData(sheet);
      });

    this.AddEmployeeForm = this.fb.group({
      name: ['', [Validators.required]],
      // mobile: ['', [Validators.required, Validators.minLength(10), Validators.pattern(/^[6-9]{1}[0-9]{9}$/)]],
      // email: ['', [Validators.required, Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/)]],
      // subject: ['', [Validators.required]],
      // message: ['', [Validators.required]],
    });


    this.chartOptions = {
      // this.data = this.data;
      series: [],

      chart: {
        type: "line",
        height: 350,
        stacked: false,
        toolbar: {
          show: true
        },
        zoom: {
          enabled: true
        }
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom"
            }
          }
        }
      ],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded"
        }
      },
      stroke: {
        show: true,
        width: 1,
        colors: ["transparent"]
      },
      markers: {
        size: 2,
    },
      xaxis: {
        type: "category",
        categories: [
          "2022"
        ]
      },
      yaxis: {
        min: 1000,
        max: 100000,
        tickAmount:50,
      },
      legend: {
        position: "bottom",
      },
      fill: {
        opacity: 1
      }
    };

    this.chartOptions_gas = {
      series: [
        {
          name: "Net Profit",
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        },
        {
          name: "Revenue",
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        },
        {
          name: "Free Cash Flow",
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
        },
        {
          name: "Free Cash Flow",
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
        }
      ],
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded"
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories: [
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct"
        ]
      },
      yaxis: {
        title: {
          text: "$ (thousands)"
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands";
          }
        }
      }
    };


    this.chartOptions_energy = {
      series: [44, 55, 13, 43],
      chart: {
        width: 380,
        type: "pie"
      },
      labels: ["Team A", "Team B", "Team C", "Team D"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };


    this.chartOptions_heatmap = {
      series: [
        {
          name: "W1",
          data: this.generateData(8, {
            min: 0,
            max: 90
          })
        },
        {
          name: "W2",
          data: this.generateData(8, {
            min: 0,
            max: 90
          })
        },
        {
          name: "W3",
          data: this.generateData(8, {
            min: 0,
            max: 90
          })
        },
        {
          name: "W4",
          data: this.generateData(8, {
            min: 0,
            max: 90
          })
        },
        {
          name: "W5",
          data: this.generateData(8, {
            min: 0,
            max: 90
          })
        },
        {
          name: "W6",
          data: this.generateData(8, {
            min: 0,
            max: 90
          })
        },
        {
          name: "W7",
          data: this.generateData(8, {
            min: 0,
            max: 90
          })
        },
        {
          name: "W8",
          data: this.generateData(8, {
            min: 0,
            max: 90
          })
        },
        {
          name: "W9",
          data: this.generateData(8, {
            min: 0,
            max: 90
          })
        },
        {
          name: "W10",
          data: this.generateData(8, {
            min: 0,
            max: 90
          })
        },
        {
          name: "W11",
          data: this.generateData(8, {
            min: 0,
            max: 90
          })
        },
        {
          name: "W12",
          data: this.generateData(8, {
            min: 0,
            max: 90
          })
        },
        {
          name: "W13",
          data: this.generateData(8, {
            min: 0,
            max: 90
          })
        },
        {
          name: "W14",
          data: this.generateData(8, {
            min: 0,
            max: 90
          })
        },
        {
          name: "W15",
          data: this.generateData(8, {
            min: 0,
            max: 90
          })
        }
      ],
      chart: {
        height: 350,
        type: "heatmap"
      },
      dataLabels: {
        enabled: false
      },
      colors: [
        "#F3B415",
        "#F27036",
        "#663F59",
        "#6A6E94",
        "#4E88B4",
        "#00A7C6",
        "#18D8D8",
        "#A9D794",
        "#46AF78",
        "#A93F55",
        "#8C5E58",
        "#2176FF",
        "#33A1FD",
        "#7A918D",
        "#BAFF29"
      ],
      xaxis: {
        type: "category",
        categories: [
          "10:00",
          "10:30",
          "11:00",
          "11:30",
          "12:00",
          "12:30",
          "01:00",
          "01:30"
        ]
      },
      title: {
        text: "HeatMap Chart (Different color shades for each series)"
      },
      grid: {
        padding: {
          right: 20
        }
      }
    };


    // this.finalArray = this.data_price.map(function (obj) {
    //   return obj.price;
    // });


  }
  public generateData(count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push(y);
      i++;
    }
    return series;
  }

  minValue: number = 2009;
  maxValue: number = 2023;
  options: Options = {
    floor: 2009,
    ceil: 2023
  };



  // ---------------- drag & drop Start ----------

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      let item: any = event.previousContainer.data[event.previousIndex];
      let copy: any = JSON.parse(JSON.stringify(item));
      let element: any = {};
      for (let attr in copy) {
        if (attr == 'title') {
          element[attr] = copy[attr];
        } else {
          element[attr] = copy[attr];
        }
      }
      this.destination.splice(event.currentIndex, 0, element);
    }
  }



  // ------

  moveItem(item: File, from: File[], to: File[]) {
    const indexInFiles = from.indexOf(item);
    if (indexInFiles > -1) {
      from.splice(indexInFiles, 1);
    }
    if (to.indexOf(item) === -1) {
      to.push(item);
    }
  }

  // ---------------- drag & drop End ----------


}
