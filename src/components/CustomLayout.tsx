import React from "react";
import { CustomHeader } from "./CustomHeader";
import { Layout } from "antd";

export const CustomLayout: React.FC = ({ children }): React.ReactElement => {

    const { Header, Footer, Content } = Layout;

    return (
        <Layout className="layout">
            <Header className="layout-header">
                <CustomHeader />
            </Header>
            <Content className="layout-content">
                {children}
            </Content>
            <Footer className="layout-footer">
                Footer
            </Footer >
        </Layout>
    )

};