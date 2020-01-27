import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HttpClient } from '@angular/common/http';
import { interval, Subscription } from 'rxjs';

declare var require: any;
/* let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more'); */
let Drilldown = require('highcharts/modules/drilldown');

/* Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts); */
Drilldown(Highcharts);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  //chart1
  public options1: any = {
    chart: {
      color: '#fff',
      backgroundColor: '#336196',
      renderTo: 'container',
      type: 'pie'
    },
    title: {
      text: "Enterprise Performance",
      style: {
        "color": "#fff"
      }
    },
    yAxis: {
      title: {
        text: 'Total percent market share'
      }
    },
    plotOptions: {
      pie: {
        shadow: false,
        borderColor: null
      }
    },
    tooltip: {
      formatter: function() {
        return '<b>' + this.point.name + '</b>: ' + this.y + '%';
      }
    },
    credits:false,
    legend: {
      align: 'right',
      layout: 'vertical',
      verticalAlign: 'middle',
      symbolRadius: 0,
      symbolPadding: 10,
      itemMarginTop: 40,
      itemStyle: {
        "color": "#fff"
      }
    },
    series: [{
      name: 'Browsers',
      data: [
        ['0-15 sec', 45.0],
        ['16-30 sec', 26.8],
        ['31-40 sec', 12.8],
        ['41-50 sec', 8.5],
        ['51-60 sec', 6.2],
        ['61 sec+ ', 0.7]
      ],
      size: '60%',
      innerSize: '70%',
      showInLegend: true,
      dataLabels: {
        enabled: false
      },
      marker: {
        symbol: 'square',
        radius: 12
      }
    }]
  }
  
  //chart2
  public options2: any = {
    chart: {
      color: '#fff',
      backgroundColor: '#336196',
      renderTo: 'container',
      type: 'pie'
    },
    title: {
      text: "Equipment Efficiency",
      style: {
        "color": "#fff"
      }
    },
    yAxis: {
      title: {
        text: 'Total percent market share'
      }
    },
    plotOptions: {
      pie: {
        shadow: false,
        borderColor: null
      }
    },
    tooltip: {
      formatter: function() {
        return '<b>' + this.point.name + '</b>: ' + this.y;
      }
    },
    legend: {
      align: 'right',
      layout: 'vertical',
      verticalAlign: 'middle',
      symbolRadius: 0,
      symbolPadding: 10,
      itemMarginTop: 40,
      itemStyle: {
        "color": "#fff"
      }
    },
    credits:false,
    series: [{
      name: 'equipments',
      data: [{
        y: 1,
        name: "abc1",
        color: "green"
      }, {
        y: 3,
        name: "abc2",
        color: "orange"
      }, {
        y: 3,
        name: "abc3",
        color: "orange"
      },  {
        y: 1,
        name: "abc4",
        color: "green"
      }, {
        y: 2,
        name: "abc15",
        color: "yellow"
      }],
      size: '60%',
      innerSize: '70%',
      showInLegend: true,
      dataLabels: {
        enabled: false
      },
      marker: {
        symbol: 'square',
        radius: 12
      }
    }]
  }

  //chart3
  /* public options: any = {
    chart: {
      type: 'line',
      height: 500
    },
    title: {
      text: 'Sample Scatter Plot'
    },
    credits: {
      enabled: false
    },
    tooltip: {
      formatter: function() {
        return 'x: ' +  this.x +   '  y: ' + this.y;
      }
    },
    xAxis: {
      categories: []
    },
    series: [
      {
        name: 'Mr. Faisal',
        data: []
      },
      {
        name: 'Mr. Pathan',
        data: []
      }
    ]
  } */

  public options3: any = {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Progress by Department'
    },
    xAxis: {
      type: 'category'
    },
  
    legend: {
      enabled: false
    },
    credits:false,
    plotOptions: {
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true
        }
      }
    },
  
    series: [{
      name: 'Things',
      colorByPoint: true,
      data: [{
        name: 'Animals',
        y: 5,
        drilldown: 'animals'
      }, {
        name: 'Fruits',
        y: 2,
        drilldown: 'fruits'
      }, {
        name: 'Cars',
        y: 4,
        drilldown: 'cars'
      }]
    }],
    drilldown: {
      series: [{
        id: 'animals',
        data: [
          ['Cats', 4],
          ['Dogs', 2],
          ['Cows', 1],
          ['Sheep', 2],
          ['Pigs', 1]
        ]
      }, {
        id: 'fruits',
        data: [
          ['Apples', 4],
          ['Oranges', 2]
        ]
      }, {
        id: 'cars',
        data: [
          ['Toyota', 4],
          ['Opel', 2],
          ['Volkswagen', 2]
        ]
      }]
    }
  }

  subscription: Subscription;
  constructor(private http: HttpClient) { }
  ngOnInit(){
    /* // My dummy API
    const apiLink = 'https://api.myjson.com/bins/zg8of';
    this.getApiResponse(apiLink).then(
      data => {
        const faisalArr = [];
        const pathanArr = [];
        const xAxisArr = [];
        data.forEach(row => {
          const temp_row = [
            row.Sales_Figure
          ];
          if(xAxisArr.find(ob => ob === row.Month) === undefined){
             xAxisArr.push(row.Month)
          }
          row.Name === 'Faisal' ? faisalArr.push(temp_row) : pathanArr.push(temp_row);
        });
        this.options.xAxis['categories'] = xAxisArr;
        this.options.series[0]['data'] = faisalArr;
        this.options.series[1]['data'] = pathanArr;
        Highcharts.chart('container-dept-eff', this.options);
      },
      error => {
        console.log('Something went wrong.');
      }); */
      
      Highcharts.chart('container-ent-perf', this.options1);
      Highcharts.chart('container-eqipment-perf', this.options2);
      Highcharts.chart('container-dept-eff', this.options3);
  }
  async getApiResponse(url: string) {
    const res = await this.http.get<any[]>(url, {})
      .toPromise();
    return res;
  }
}
