
// list select interface
export interface ListSelectDto {
  header?: any
  prop: string
  label: string
  width?: number
  fixed?: boolean | string
}

// query pager dto
export interface QueryPagerDto {
  currentPage: number
  pageSize: number
  condition?: any
}
export interface QueryBaseDto {
  currentPage: number
  pageSize: number
}
export interface PagerDto {
  currentPage: number
  pageSize: number
  total: number
}
// result
export interface Result<T> {
  status: number
  data: T
  message?: string
  pager?: PagerDto
}

export interface SelectOptionDto {
  label: string | number
  value: string | number
  children?: SelectOptionDto[]
}