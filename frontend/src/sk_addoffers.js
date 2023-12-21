import {
    Page,
    Layout,
    Card,
    // SkeletonBodyText,
    SkeletonDisplayText,
    BlockStack,
    Text,
    Box,
    SkeletonBodyText,
    InlineStack
} from '@shopify/polaris';

function SkAddOffers() {
    const Placeholder = ({ label = '', height = 'auto', width = 'auto' }) => {
        return (
            <div
                style={{
                    background: 'var(--p-color-border-interactive-subdued)',
                    height: height,
                    width: width,
                    borderRadius: 'inherit',
                }}
            >
                <div
                    style={{
                        color: 'var(--p-color-text)',
                    }}
                >
                    <Text as="p" variant="bodyMd">
                        {label}
                    </Text>
                </div>
            </div>
        );
    };


    return (
        <Page fullWidth>
            <div style={{ height: '20px' }}></div>
            <Layout>
                <Layout.Section variant="oneThird">
                    <SkeletonDisplayText></SkeletonDisplayText>
                </Layout.Section>
                <Layout.Section>
                    <BlockStack gap="400">
                        <Card>
                            <BlockStack gap="600">
                                <Text variant="headingMd">Placement</Text>
                                <Box background="bg-surface-brand" borderRadius="200" shadow="100" padding="500" minWidth="20px" minHeight="20px" maxWidth=" 290px">
                                    <Placeholder label="" />
                                </Box>
                                <Text variant="headingMd">Type</Text>
                                <Box background="bg-surface-brand" borderRadius="200" shadow="100" padding="500" minWidth="20px" minHeight="20px" maxWidth=" 370px">
                                    <Placeholder label="" />
                                </Box>
                                <Box background="bg-surface-brand" borderRadius="200" shadow="100" padding="500" minWidth="20px" minHeight="330px" maxWidth="auto">
                                    <Placeholder label="" />
                                </Box>
                                <SkeletonBodyText lines={2} />
                            </BlockStack>
                        </Card>
                        <InlineStack align="end">
                            <Box background="bg-surface-brand" borderRadius="200" shadow="100" padding="500" minWidth="230px" minHeight="20px" maxWidth=" 290px">
                                <Placeholder label="" />
                            </Box>
                        </InlineStack>
                    </BlockStack>
                </Layout.Section>
            </Layout>
            <div style={{ height: '25px' }}> </div>

        </Page>

    );
}

export default SkAddOffers;