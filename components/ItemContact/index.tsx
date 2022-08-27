import React from 'react'
import { IconType } from 'react-icons'

import { Item, Icon, Text } from './style'

interface IItemContactProps{
  IconFa: IconType
  LinkContact: string
}

const ItemContact = ({ IconFa, LinkContact }: IItemContactProps) => {
  return (
    <Item>
      <Icon>
        <IconFa />
      </Icon>
      <Text>
        {LinkContact}
      </Text>
    </Item>
  )
}

export default ItemContact
