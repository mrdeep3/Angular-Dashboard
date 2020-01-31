import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HttpClient } from '@angular/common/http';
import { interval, Subscription } from 'rxjs';

declare var require: any;

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
      name: 'perf',
      data: [
        ['In Progress', 12],
        ['Completed', 10]
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
      layout: 'horizontal',
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
        name: "ABC1",
        color: "yellow"
      },{
        y: 1,
        name: "ABC2",
        color: "orange"
      },{
        y: 1,
        name: "ABC3",
        color: "orange"
      },{
        y: 1,
        name: "ABC4",
        color: "green"
      },{
        y: 1,
        name: "ABC5",
        color: "green"
      }, {
        y: 3,
        name: "ABC6",
        color: "orange"
      }, {
        y: 3,
        name: "ABC7",
        color: "green"
      },  {
        y: 1,
        name: "ABC8",
        color: "green"
      }, {
        y: 2,
        name: "ABC9",
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
  public options3: any = {
    chart: {
      type: 'bar',
    },
    title: {
        text: 'Progress by Department'
    },
    xAxis: {
        categories: ['Milling', 'Packaging', 'Processing']
    },
    yAxis: {
        min: 0
    },
    legend: {
        reversed: true
    },
    credits: false, 
    plotOptions: {
      series: {
        cursor:'pointer',
        events: {
          click:function(){
            window.open("./equipment","_self")
          }
        },
        stacking: 'normal'
      }
    },
    series: [{
        name: 'In progress',
        color:'orange',
        data: [5, 3, 4]
      }, {
        name: 'Completed',
        color:'green',
        data: [5, 2, 3]
      }]
    }

  constructor(private http: HttpClient) { }
  ngOnInit(){    
      Highcharts.chart('container-ent-perf', this.options1);
      Highcharts.chart('container-eqipment-perf', this.options2);
      Highcharts.chart('container-dept-eff', this.options3);
  }
}
