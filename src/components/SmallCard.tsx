import React from 'react'
import { Card } from 'antd'
import { InfoCircleOutlined } from '@ant-design/icons'

interface ISmallCard {
  id: number
  name: string
  pictureUrl: string
}

export const SmallCard: React.FC<ISmallCard> = ({ id, name, pictureUrl }): React.ReactElement => {
  const { Meta } = Card

  return (
    <>
      <Card
        style={{
          width: '150px',
          boxShadow: '1px 1px 1px  1px darkgrey',
          border: '1px solid lightgray',
          margin: '.5rem',
        }}
        cover={<img alt="pokemon-picture" src={pictureUrl} />}
        actions={[<InfoCircleOutlined key="info" />]}
      >
        <Meta title={name.charAt(0).toUpperCase() + name.substring(1, name.length)} description={`#${id}`} />
      </Card>
    </>
  )
}
