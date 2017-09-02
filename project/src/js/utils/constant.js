const API = 'http://localhost:8080'


const rentPriceOptions = [
  {value: 0, label: '不限'},
  {value: 'a', label: '0-100万'},
  {value: 'b', label: '100-150万'},
  {value: 'c', label: '150万以上'},
]

const areaOptions = [
  {value: 0, label: '不限'},
  {value: 'a', label: '0-50'},
  {value: 'b', label: '50-100'},
  {value: 'c', label: '100平以上'},
]

const typeOptions = [
  {value: 0, label: '不限'},
  {value: 'a', label: '1室'},
  {value: 'b', label: '2室'},
  {value: 'c', label: '3室'},
  {value: 'd', label: '4室'},
  {value: 'f', label: '4室以上'},
]


const MAP_KEY = 'b68328f20e4239926ef3a17fbec30f7a'
const LON_LAT_KEY = '7d553805f6fa2d91c6c71e1b44ac88c2'

const Constant = {
  API: API,
  NEWS_PIC_UPLOAD_API: API + '/news/upload',
  USER_INFO: 'userInfo',
  RENT_PRICE_OPTIONS: rentPriceOptions,
  AREA_OPTIONS: areaOptions,
  TYPE_OPTIONS: typeOptions,
  MAP_KEY,
  LON_LAT_KEY,
}

export default Constant