export interface MenuItem {
  label: string
  uri: string
  newTab: boolean
}

const menuItems: MenuItem[] = [
  { label: 'Home', uri: '/', newTab: false },
  { label: 'Ministries', uri: '/ministries', newTab: false },
  {
    label: 'C2C Resources',
    uri: 'https://c2cfamily.org/#resources',
    newTab: true
  },
  { label: 'Contact', uri: '/contact', newTab: false },
  {
    label: 'Give Online',
    uri: 'https://lifeoc.churchcenter.com/giving',
    newTab: true
  }
]

export function useMenu(): MenuItem[] {
  return menuItems
}
