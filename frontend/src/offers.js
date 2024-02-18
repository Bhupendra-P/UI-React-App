// React
//From Shopify-Polaris
import {
    Layout,
    Banner,
    MediaCard,
    BlockStack,
    VideoThumbnail,
    Card,
    Text,
    InlineStack,
    Box,
    Divider,
    Button,
    Link,
} from '@shopify/polaris';


function Offers() {

    const instructionComponent = (
        <>
            <Layout>
                <Layout.Section variant="oneHalf">
                    <Banner
                        title="Setup Instructions"
                        // action={{ content: 'Update rates', url: '' }} ---->> It will not be used.
                        // secondaryAction={{ content: 'Learn more' }}
                        tone="info"
                        onDismiss={() => { }}
                    >
                        <BlockStack gap="150">
                            <p>1. Create a new upsell offer by clicking <b>Add Offer</b> button.</p>
                            <p>2. The upsell widget’s text and style can be customized from the Settings page.</p>
                            <p>3. To view the upsell widget, visit the trigger product’s page and checkout.</p>
                        </BlockStack>
                    </Banner>
                </Layout.Section>
                <Layout.Section variant="oneHalf">
                    <MediaCard
                        title="Setup upsell offer with this app in just 2 minutes"
                        primaryAction={{
                            content: 'Watch Now',
                            onAction: () => { },
                        }}
                        secondaryAction={{
                            content: 'Visit our knowledge base.',
                            onAction: () => { },
                        }}
                        description={`Let's setup your upsell offer in just 3 easy steps.`}
                        popoverActions={[{ content: 'Dismiss', onAction: () => { } }]}

                        style={{ height: '100%', flex: '1', maxWidth: '100%' }}
                    >
                        <VideoThumbnail
                            videoLength={80}
                            thumbnailUrl="https://burst.shopifycdn.com/photos/business-woman-smiling-in-office.jpg?width=1850"
                            onClick={() => console.log('clicked')}
                        />
                    </MediaCard>
                </Layout.Section>
            </Layout>
        </>
    );
    const dashBoard = (
        <>
            <Card><BlockStack gap="500">
                <InlineStack gap="100" align="start" blockAlign="baseline">
                    <Text variant="headingXl" as="h4">Summary</Text>
                    <Text alignment="end" variant="bodySm" tone="subdued">(Current Month)</Text>
                </InlineStack>
                <InlineStack gap="400" align="space-between">
                    <Box borderColor="border" borderWidth="025" background="bg-surface" borderRadius="300" shadow="100" padding="500" minWidth="260px" minHeight="140px">
                        <BlockStack align="center" gap="500">
                            <Text tone="subdued" variant="headingMd" as="h6" alignment="start"> Impressions</Text>
                            <Text variant="heading2xl" as="h3" fontWeight="regular">1200</Text>
                        </BlockStack>
                    </Box>
                    <Box borderColor="border" borderWidth="025" background="bg-surface" borderRadius="300" shadow="100" padding="500" minWidth="260px" minHeight="140px">
                        <BlockStack align="center" gap="500">
                            <Text tone="subdued" variant="headingMd" as="h6" alignment="start">Add To Cart</Text>
                            <Text variant="heading2xl" as="h3" fontWeight="regular">97</Text>
                        </BlockStack>
                    </Box>
                    <Box borderColor="border" borderWidth="025" background="bg-surface" borderRadius="300" shadow="100" padding="500" minWidth="260px" minHeight="140px">
                        <BlockStack align="end" gap="500">
                            <Text tone="subdued" variant="headingMd" as="h6" alignment="start">Orders</Text>
                            <Text variant="heading2xl" as="h3" fontWeight="regular">137</Text>
                        </BlockStack>
                    </Box>
                    <Box borderColor="border" borderWidth="025" background="bg-surface" borderRadius="300" shadow="100" padding="500" minWidth="260px" minHeight="140px">
                        <BlockStack align="center" gap="500">
                            <Text tone="subdued" variant="headingMd" as="h6" alignment="start">Revenue</Text>
                            <Text variant="heading2xl" as="h3" fontWeight="regular">$7600.00</Text>
                        </BlockStack>
                    </Box>
                </InlineStack>
                <Text alignment="start" variant="bodySm" tone="subdued">Last updated on Dec 26, 2022 at 12:45 am UTC</Text>

            </BlockStack>
            </Card>
        </>
    );

    // _________________________>>>

    return (
        <>
            <div style={{ height: '30px' }}></div>
            <BlockStack align='start' gap="1000">
                {instructionComponent}
                {dashBoard}
                <Card>
                    <BlockStack gap="500">
                        <Text variant="headingXl" as="h4">Offers</Text>
                        <Card>
                            <BlockStack gap="300">
                                <InlineStack gap="600" align="space-between">
                                    <Box minWidth="090px" maxWidth="090px"><Text variant="headingMd" as="h6" alignment="center">Offer Name</Text></Box>
                                    <Box minWidth="180px" maxWidth="180px"><Text variant="headingMd" as="h6" alignment="center">Placement Type</Text></Box>
                                    <Box minWidth="090px" maxWidth="090px"><Text variant="headingMd" as="h6" alignment="center">Priority</Text></Box>
                                    <Box minWidth="090px" maxWidth="090px"><Text variant="headingMd" as="h6" alignment="center">Views</Text></Box>
                                    <Box minWidth="090px" maxWidth="090px"><Text variant="headingMd" as="h6" alignment="center">Add To Cart</Text></Box>
                                    <Box minWidth="080px" maxWidth="080px"><Text variant="headingMd" as="h6" alignment="center">Sales</Text></Box>
                                    <Box minWidth="110px" maxWidth="110px"><Text variant="headingMd" as="h6" alignment="center">Revenue</Text></Box>
                                    <Box minWidth="110px" maxWidth="110px"><Text variant="headingMd" as="h6" alignment="center">Status</Text></Box>
                                </InlineStack>
                                <Divider />
                                <InlineStack align="space-between" blockAlign="start">
                                    <Box minWidth="090px" maxWidth="090px"><InlineStack align="center"><Link url="https://help.shopify.com/manual" removeUnderline>CWC 23</Link></InlineStack></Box>
                                    <Box minWidth="180px" maxWidth="180px"><Text alignment="center">Frequently Baught Together</Text></Box>
                                    <Box minWidth="090px" maxWidth="090px"><Text alignment="center">100</Text></Box>
                                    <Box minWidth="090px" maxWidth="090px"><Text alignment="center">1046</Text></Box>
                                    <Box minWidth="090px" maxWidth="090px"><Text alignment="center">264</Text></Box>
                                    <Box minWidth="080px" maxWidth="080px"><Text alignment="center">11</Text></Box>
                                    <Box minWidth="110px" maxWidth="110px"><Text alignment="center">$257.34</Text></Box>
                                    <Box minWidth="110px" maxWidth="110px">
                                        <InlineStack align="center">
                                            <Button size="medium" variant="primary" tone="success" textAlign="center">Activate</Button>
                                        </InlineStack>
                                    </Box>
                                </InlineStack>
                                <Divider />
                                <InlineStack align="space-between" blockAlign="start">
                                    <Box minWidth="090px" maxWidth="090px"><InlineStack align="center"><Link url="https://help.shopify.com/manual" removeUnderline>CWC 23</Link></InlineStack></Box>
                                    <Box minWidth="180px" maxWidth="180px"><Text alignment="center">Frequently Baught Together</Text></Box>
                                    <Box minWidth="090px" maxWidth="090px"><Text alignment="center">100</Text></Box>
                                    <Box minWidth="090px" maxWidth="090px"><Text alignment="center">1254</Text></Box>
                                    <Box minWidth="090px" maxWidth="090px"><Text alignment="center">413</Text></Box>
                                    <Box minWidth="080px" maxWidth="080px"><Text alignment="center">28</Text></Box>
                                    <Box minWidth="110px" maxWidth="110px"><Text alignment="center">$557.00</Text></Box>
                                    <Box minWidth="110px" maxWidth="110px">
                                        <InlineStack align="center">
                                            <Button size="medium" variant="primary" tone="success" textAlign="center">Activate</Button>
                                        </InlineStack>
                                    </Box>
                                </InlineStack>
                                <Divider />
                                <InlineStack align="space-between" blockAlign="start">
                                    <Box minWidth="090px" maxWidth="090px"><InlineStack align="center"><Link url="https://help.shopify.com/manual" removeUnderline>CWC 23</Link></InlineStack></Box>
                                    <Box minWidth="180px" maxWidth="180px"><Text alignment="center">Add To Cart</Text></Box>
                                    <Box minWidth="090px" maxWidth="090px"><Text alignment="center">0</Text></Box>
                                    <Box minWidth="090px" maxWidth="090px"><Text alignment="center">3245</Text></Box>
                                    <Box minWidth="090px" maxWidth="090px"><Text alignment="center">316</Text></Box>
                                    <Box minWidth="080px" maxWidth="080px"><Text alignment="center">78</Text></Box>
                                    <Box minWidth="110px" maxWidth="110px"><Text alignment="center">$356.39</Text></Box>
                                    <Box minWidth="110px" maxWidth="110px">
                                        <InlineStack align="center">
                                            <Button size="medium" variant="primary" tone="success" textAlign="center">Activate</Button>
                                        </InlineStack>
                                    </Box>
                                </InlineStack>
                                <Divider />
                                <InlineStack align="space-between" blockAlign="start">
                                    <Box minWidth="090px" maxWidth="090px"><InlineStack align="center"><Link url="https://help.shopify.com/manual" removeUnderline>CWC23</Link></InlineStack></Box>
                                    <Box minWidth="180px" maxWidth="180px"><Text alignment="center">Frequently Baught Together</Text></Box>
                                    <Box minWidth="090px" maxWidth="090px"><Text alignment="center">100</Text></Box>
                                    <Box minWidth="090px" maxWidth="090px"><Text alignment="center">1329</Text></Box>
                                    <Box minWidth="090px" maxWidth="090px"><Text alignment="center">264</Text></Box>
                                    <Box minWidth="080px" maxWidth="080px"><Text alignment="center">37</Text></Box>
                                    <Box minWidth="110px" maxWidth="110px"><Text alignment="center">$521.93</Text></Box>
                                    <Box minWidth="110px" maxWidth="110px">
                                        <InlineStack align="center">
                                            <Button size="medium" variant="primary" tone="success" textAlign="center">Activate</Button>
                                        </InlineStack>
                                    </Box>
                                </InlineStack>
                                <Divider />
                                <InlineStack align="space-between" blockAlign="start">
                                    <Box minWidth="090px" maxWidth="090px"><InlineStack align="center"><Link url="https://help.shopify.com/manual" removeUnderline>CWC 23</Link></InlineStack></Box>
                                    <Box minWidth="180px" maxWidth="180px"><Text alignment="center">Add To Cart</Text></Box>
                                    <Box minWidth="090px" maxWidth="090px"><Text alignment="center">0</Text></Box>
                                    <Box minWidth="090px" maxWidth="090px"><Text alignment="center">946</Text></Box>
                                    <Box minWidth="090px" maxWidth="090px"><Text alignment="center">427</Text></Box>
                                    <Box minWidth="080px" maxWidth="080px"><Text alignment="center">23</Text></Box>
                                    <Box minWidth="110px" maxWidth="110px"><Text alignment="center">$429.21</Text></Box>
                                    <Box minWidth="110px" maxWidth="110px">
                                        <InlineStack align="center">
                                            <Button size="medium" variant="primary" tone="success" textAlign="center">Activate</Button>
                                        </InlineStack>
                                    </Box>
                                </InlineStack>
                            </BlockStack>
                        </Card>
                    </BlockStack>
                </Card>
            </BlockStack>
            <div style={{ height: '30px' }}></div>
        </>
    );
};
export default Offers;