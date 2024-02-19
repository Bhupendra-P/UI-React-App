import {
    Page,
    Layout,
    BlockStack,
    Card,
} from '@shopify/polaris';
import SKCard from './skeletoncard';

function SkCartAddOn() {
    return (
        <Page fullWidth
            backAction={{ content: 'Settings', url: '#' }}
            title="Cart Add-On"
            primaryAction={{ content: 'Save', variant: "primary", tone: "success" }}
        >
            <BlockStack gap="1000">
                <Card>
                    <SKCard width={1410} height={0}></SKCard>
                </Card>
                <Layout>
                    <Layout.Section variant="oneThird">
                        <BlockStack gap="300">
                            <SKCard width={90} height={25}></SKCard>
                            <SKCard width={180} height={0}></SKCard>
                        </BlockStack>
                    </Layout.Section>
                    <Layout.Section>
                        <Card>
                            <BlockStack gap="500">
                                <SKCard width={120} height={0}></SKCard>
                                <SKCard width={920} height={30}></SKCard>
                                <SKCard width={120} height={0}></SKCard>
                                <SKCard width={920} height={30}></SKCard>
                                <SKCard width={120} height={0}></SKCard>
                                <SKCard width={920} height={30}></SKCard>
                                <SKCard width={120} height={0}></SKCard>
                                <SKCard width={920} height={30}></SKCard>
                                <SKCard width={120} height={0}></SKCard>
                                <SKCard width={920} height={30}></SKCard>
                            </BlockStack>
                        </Card>
                    </Layout.Section>
                </Layout>
            </BlockStack>
            <div style={{ height: 50 }}></div>
        </Page>
    );
}
export default SkCartAddOn;