export interface IGroup {
  name?: string
  tips?: string
  value?: boolean
  change?: (value: any) => void
  slot?: string
  slotLeft?: string
  slotRight?: string
  group?: IGroup[]
  [key: string]: any
}

export interface IOptions {
  title: string
  option: IGroup[]
}

export interface ISetting {
  name: string
  icon: any
  options: IOptions[]
}
