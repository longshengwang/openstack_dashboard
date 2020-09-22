import {Component} from '@angular/core';
import {ClrDatagridStringFilterInterface} from '@clr/angular';

class NameFilter implements ClrDatagridStringFilterInterface<any> {
  accepts(user: any, search: string): boolean {
    return '' + user.name === search
      || user.name.toLowerCase().indexOf(search) >= 0;
  }
}

class Host {
  name: string;
  status: string;
  type: string;
  ip: string;
  config: string;
  network: string;
  jiFei: string;
  opt: string;


  constructor(name: string,
              status: string,
              type: string,
              ip: string,
              config: string,
              network: string,
              jiFei: string,
              opt: string) {
    this.name = name;
    this.status = status;
    this.type = type;
    this.ip = ip;
    this.config = config;
    this.network = network;
    this.jiFei = jiFei;
    this.opt = opt;
  }
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  basic: boolean;
  nameFilter = new NameFilter();
  title = 'osvm';
  tableValues: Array<Host>;
  selected: Array<Host>;
  search: string;
  // options
  legend: boolean;
  showLabels: boolean;
  animations: boolean;
  xAxis: boolean;
  yAxis: boolean;
  showYAxisLabel: boolean;
  showXAxisLabel: boolean;
  xAxisLabel: string;
  yAxisLabel: string;
  timeline: boolean;
  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  view: any[] = [700, 300];
  multi = [
    {
      name: '入流量',
      series: [
        {
          name: '10:12',
          value: 3000
        },
        {
          name: '10:13',
          value: 3400
        },
        {
          name: '10:14',
          value: 1234
        },
        {
          name: '10:15',
          value: 3100
        },
        {
          name: '10:16',
          value: 3800
        },
        {
          name: '10:17',
          value: 2234
        },
        {
          name: '10:18',
          value: 2000
        },
        {
          name: '10:19',
          value: 8400
        },
        {
          name: '10:20',
          value: 4234
        }
      ]
    },
    {
      name: '出流量',
      series: [
        {
          name: '10:12',
          value: 1000
        },
        {
          name: '10:13',
          value: 2400
        },
        {
          name: '10:14',
          value: 234
        },
        {
          name: '10:15',
          value: 100
        },
        {
          name: '10:16',
          value: 800
        },
        {
          name: '10:17',
          value: 34
        },
        {
          name: '10:18',
          value: 20
        },
        {
          name: '10:19',
          value: 400
        },
        {
          name: '10:20',
          value: 423
        }
      ]
    }
  ];

  group: any[];

  constructor() {

    this.group = [
      {
        name: '内网只出不进',
        protocol: 'tcp',
        action: '允许',
        startPort: '4000',
        endPort: '4010',
        sourceIp: '192.168.20.0/24',
        backup: ''
      },
      {
        name: '内网只出不进',
        protocol: 'tcp',
        action: '允许',
        startPort: '4000',
        endPort: '4010',
        sourceIp: '192.168.10.0/24',
        backup: ''
      },
      {
        name: '内网只出不进',
        protocol: 'udp',
        action: '拒绝',
        startPort: '43',
        endPort: '43',
        sourceIp: '192.168.10.0/24',
        backup: ''
      }
    ];
    this.legend = true;
    this.showLabels = true;
    this.animations = true;
    this.xAxis = true;
    this.yAxis = true;
    this.showYAxisLabel = true;
    this.showXAxisLabel = false;
    this.xAxisLabel = '';
    this.yAxisLabel = 'kb/s';
    this.timeline = true;

    this.selected = [];
    this.tableValues = [];
    this.tableValues.push(new Host('host_finance_1', '运行中', '存储型', '192.168.10.20', '24核 64G', 'vpc_finance', '月结', '更多'));
    this.tableValues.push(new Host('host_finance_2', '运行中', '存储型', '192.168.10.21', '12核 32G', 'vpc_finance', '月结', '更多'));
    this.tableValues.push(new Host('host_finance_3', '运行中', '存储型', '192.168.10.22', '24核 64G', 'vpc_finance', '月结', '更多'));
    this.tableValues.push(new Host('host_finance_4', '运行中', '存储型', '192.168.10.23', '6核 12G', 'vpc_finance', '月结', '更多'));
    this.tableValues.push(new Host('host_develop_1', '运行中', '存储型', '192.168.10.24', '24核 64G', 'vpc_develop', '月结', '更多'));
    this.tableValues.push(new Host('host_develop_2', '运行中', '存储型', '192.168.10.25', '24核 64G', 'vpc_develop', '月结', '更多'));
    this.tableValues.push(new Host('host_develop_3', '运行中', '存储型', '192.168.10.26', '24核 64G', 'vpc_develop', '月结', '更多'));
    this.tableValues.push(new Host('host_develop_4', '运行中', '存储型', '192.168.10.27', '24核 64G', 'vpc_develop', '月结', '更多'));
    this.tableValues.push(new Host('host_develop_5', '运行中', '存储型', '192.168.10.28', '24核 64G', 'vpc_develop', '月结', '更多'));
    this.tableValues.push(new Host('host_develop_6', '运行中', '存储型', '192.168.10.29', '36核 64G', 'vpc_develop', '月结', '更多'));
    this.tableValues.push(new Host('host_develop_7', '运行中', '存储型', '192.168.10.30', '24核 64G', 'vpc_develop', '月结', '更多'));
    this.tableValues.push(new Host('host_develop_8', '运行中', '存储型', '192.168.10.31', '24核 64G', 'vpc_develop', '月结', '更多'));
    this.tableValues.push(new Host('host_develop_9', '运行中', '存储型', '192.168.10.32', '24核 64G', 'vpc_develop', '月结', '更多'));
    this.tableValues.push(new Host('host_develop_10', '运行中', '存储型', '192.168.10.33', '24核 64G', 'vpc_develop', '月结', '更多'));
    this.tableValues.push(new Host('host_develop_11', '运行中', '存储型', '192.168.10.34', '24核 64G', 'vpc_develop', '月结', '更多'));
    this.tableValues.push(new Host('host_develop_12', '运行中', '存储型', '192.168.10.35', '24核 64G', 'vpc_develop', '月结', '更多'));
    this.tableValues.push(new Host('host_test_1', '运行中', '存储型', '192.168.10.36', '24核 64G', 'vpc_test', '月结', '更多'));
    this.tableValues.push(new Host('host_test_2', '运行中', '存储型', '192.168.10.37', '24核 64G', 'vpc_test', '月结', '更多'));
    this.tableValues.push(new Host('host_test_3', '运行中', '存储型', '192.168.10.38', '24核 64G', 'vpc_test', '月结', '更多'));
    this.tableValues.push(new Host('host_test_4', '运行中', '存储型', '192.168.10.39', '24核 64G', 'vpc_test', '月结', '更多'));

  }

  login(): void {

  }


  click($event): void {

  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  bDelete(): void {
    this.basic = true;
  }

}
