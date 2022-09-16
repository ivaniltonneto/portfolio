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
        <a href={LinkContact} target="_blank" rel="noreferrer">{LinkContact}</a>
      </Text>
    </Item>
  )
}

export default ItemContact
