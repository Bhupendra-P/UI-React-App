// Media Used
import Preview from './Dev Media/Layer1.png';

// Shopify polaris
import {
    Page,
    Card,
    Layout,
    Text,
    BlockStack,
    Button,
    InlineStack,
    Box,
} from '@shopify/polaris';

function AddOffer() {
    return (
        <Page fullWidth backAction={{ content: 'Settings', variantL: 'primary', tone: 'success', size: 'large', url: '#' }} title="Add Offer">
            <div style={{ height: '20px' }}></div>
            <Layout>
                <Layout.Section variant="oneThird">
                    <BlockStack gap="050">
                        <Text variant="headingMd" as="h6">Upsell Type</Text>
                        <Text variant="bodyMd" tone="subdued">Select an upsell type</Text>
                    </BlockStack>
                </Layout.Section>
                <Layout.Section>
                    <BlockStack gap="400">
                        <Card>
                            <BlockStack gap="600">
                                <Text variant="headingMd">Placement</Text>
                                <InlineStack gap="600">
                                    <Button size="large">Product Page</Button>
                                    <Button size="large">Cart Page</Button>
                                </InlineStack>
                                <Text variant="headingMd">Type</Text>
                                <InlineStack gap="600">
                                    <Button size="large">Frequently Baught Together</Button>
                                    <Button size="large">Cart Add-On</Button>
                                </InlineStack>
                                <img src={Preview} alt="Preview On Display" height={'340px'} />
                                <Box>
                                    <Text variant="bodySm" tone="subdued">Displays an Amazon style freequently baught together bundle on the product page. For example, if you sell burgers, you can bundle french fries along with it. </Text>
                                </Box>
                            </BlockStack>
                            <div style={{ height: '25px' }}> </div>
                        </Card>
                        <InlineStack align="end">
                            <Button variant="primary" size="large" tone="success" url="/offersetup"> Proceed To Setup Offer</Button>
                        </InlineStack>
                        <div style={{ height: '25px' }}> </div>
                    </BlockStack>
                </Layout.Section>
            </Layout>
        </Page>
    );
}

export default AddOffer;