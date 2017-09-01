const API = 'http://118.89.161.69:8080'

const subwayOptions = [{
  value: '10号线', label: '10号线',
  children: [
    {value: 0, label: '全线'},
    {value: '同济大学', label: '同济大学'},
    {value: '四平路', label: '四平路'},
    {value: '邮电新村', label: '邮电新村'},
    {value: '海伦路', label: '海伦路'},
    {value: '国权路', label: '国权路'},
    {value: '五角场', label: '五角场'},
    {value: '四川北路', label: '四川北路'},
  ],
}, {
  value: '8号线', label: '8号线',
  children: [
    {value: 0, label: '全线'},
    {value: '黄兴公园', label: '黄兴公园'},
    {value: '延吉中路', label: '延吉中路'},
    {value: '黄兴路', label: '黄兴路'},
    {value: '江浦路', label: '江浦路'},
    {value: '鞍山新村', label: '鞍山新村'},
    {value: '四平路', label: '四平路'},
    {value: '曲阳路', label: '曲阳路'},
    {value: '虹口足球场', label: '虹口足球场'},
  ],
}, {
  value: '6号线', label: '6号线',
  children: [
    {value: 0, label: '全线'},
    {value: '五洲大道', label: '五洲大道'},
    {value: '东靖路', label: '东靖路'},
    {value: '巨峰路', label: '巨峰路'},
    {value: '五莲路', label: '五莲路'},
    {value: '博兴路', label: '博兴路'},
    {value: '金桥路', label: '金桥路'},
    {value: '云山路', label: '云山路'},
    {value: '德平路', label: '德平路'},
  ],
}, {
  value: '4号线', label: '4号线',
  children: [
    {value: 0, label: '全线'},
    {value: '临平路', label: '临平路'},
    {value: '大连路', label: '大连路'},
    {value: '杨树浦路', label: '杨树浦路'},
    {value: '浦东大道', label: '浦东大道'},
    {value: '世纪大道', label: '世纪大道'},
    {value: '浦电路', label: '浦电路'},
    {value: '蓝村路', label: '蓝村路'},
    {value: '塘桥', label: '塘桥'},
  ],
}, {
  value: '3号线', label: '3号线',
  children: [
    {value: 0, label: '全线'},
    {value: '大柏树', label: '大柏树'},
    {value: '赤峰路', label: '赤峰路'},
    {value: '江湾镇', label: '江湾镇'},
    {value: '虹口足球场', label: '虹口足球场'},
    {value: '宝山路', label: '宝山路'},
    {value: '上海火车站', label: '上海火车站'},
    {value: '中潭路', label: '中潭路'},
    {value: '镇坪路', label: '镇坪路'},
  ],
}]

const regionOptions = [
  {value: 0, label: '不限'},
  {value: '浦东', label: '浦东'},
  {value: '杨浦', label: '杨浦'},
  {value: '黄浦', label: '黄浦'},
  {value: '静安', label: '静安'},
  {value: '长宁', label: '长宁'},
  {value: '嘉定', label: '嘉定'},
  {value: '徐汇', label: '徐汇'},
  {value: '青浦', label: '青浦'},
  {value: '普陀', label: '普陀'},
  {value: '虹口', label: '虹口'},
  {value: '宝山', label: '宝山'},
  {value: '闵行', label: '闵行'},
]

const salePriceOptions = [
  {value: 0, label: '不限'},
  {value: '0-100', label: '0-100万'},
  {value: '100-200', label: '100-200万'},
  {value: '200-400', label: '200-400万'},
  {value: '400-600', label: '400-600万'},
  {value: '600-800', label: '600-800万'},
  {value: '800-1000', label: '800-1000万'},
]

const rentPriceOptions = [
   {value: 0, label: '不限'},
  {value: '0-100', label: '0-100万'},
  {value: '100-200', label: '100-150万'},
  {value: '200-400', label: '150万以上'},
]

const areaOptions = [
  {value: 0, label: '不限'},
  {value: '0-50', label: '0-50'},
  {value: '30-60', label: '50-100'},
  {value: '60-120', label: '100平以上'},
]

const typeOptions = [
  {value: 0, label: '不限'},
  {value: '1室', label: '1室'},
  {value: '2室', label: '2室'},
  {value: '两室两厅', label: '3室'},
  {value: '三室', label: '4室'},
  {value: '三室一厅', label: '4室以上'},
]

const decOptions = [
  {value: 0, label: '不限'},
  {value: '精装', label: '精装'},
  {value: '简装', label: '简装'},
  {value: '毛坯', label: '毛坯'},
]

const saleTypeOptions = [
  {label: '出租', value: 0},
  {label: '出售', value: 1},
]

const MAP_KEY = 'b68328f20e4239926ef3a17fbec30f7a'
const LON_LAT_KEY = '7d553805f6fa2d91c6c71e1b44ac88c2'

const Constant = {
  API: API,
  NEWS_PIC_UPLOAD_API: API + '/news/upload',
  USER_INFO: 'userInfo',
  SUBWAY_OPTIONS: subwayOptions,
  REGION_OPTIONS: regionOptions,
  SALE_PRICE_OPTIONS: salePriceOptions,
  RENT_PRICE_OPTIONS: rentPriceOptions,
  AREA_OPTIONS: areaOptions,
  TYPE_OPTIONS: typeOptions,
  DEC_OPTIONS: decOptions,
  SALE_TYPE_OPTIONS: saleTypeOptions,
  MAP_KEY,
  LON_LAT_KEY,
}

export default Constant