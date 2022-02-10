import React from 'react'
import { Button } from "antd";
import { ButtonType } from "antd/es/button";

interface ICustomButton {
    type: ButtonType
    text: string
    loading: boolean
}

export const CustomButton: React.FC<ICustomButton> = ({ type, loading, text }: ICustomButton): React.ReactElement => {
    return <Button type={type} loading={loading}>{text}</Button>
}