// REACT

import React from 'react';
import { useState, useCallback } from 'react';

//From Shopify-Polaris
import {
    Page,
    Layout,
    Card,
    Text,
    InlineStack,
    Link,
    Button,
    BlockStack,
    TextField
} from '@shopify/polaris';


function Settings() {

    const [value, setValue] = useState('Add new CSS here...');

    const handleChange = useCallback(
        (newValue) => setValue(newValue),
        [],
    );



    return (
        <Page fullWidth backAction={{ content: 'offersPage', url: '/offers.js' }} // Clarify
            title="Settings">
            <BlockStack gap="600">
                <Layout>
                    <Layout.Section variant="oneThird">
                        <Text variant="headingMd" as="h6">
                            Product Page Widgets
                        </Text>
                        <Text as="p" tone="subdued">
                            Customize how and where the offers appear on the Product Page.
                        </Text>
                    </Layout.Section>
                    <Layout.Section>
                        <Card>
                            <BlockStack gap="600">
                                <InlineStack align='space-between'>
                                    <Text variant="headingMd" as="h6">
                                        Frequently Baught Together
                                    </Text>
                                    <InlineStack align='end' gap="400">
                                        <Link removeUnderline url='/editfbt'>Edit Widgets</Link>
                                        <Button variant="primary" tone="success">Enable</Button>
                                    </InlineStack>
                                </InlineStack>
                                <Text as="p" tone="subdued">
                                    Appears on Product Page, Embedded in the page
                                </Text>
                            </BlockStack>

                        </Card>
                    </Layout.Section>
                </Layout>
                <Layout>
                    <Layout.Section variant="oneThird">
                        <Text variant="headingMd" as="h6">
                            Cart Page Widgets
                        </Text>
                        <Text as="p" tone="subdued">
                            Customize how and where the offers appear on the Cart Page.
                        </Text>
                    </Layout.Section>
                    <Layout.Section>
                        <Card>
                            <BlockStack gap="600">
                                <InlineStack align='space-between'>
                                    <Text variant="headingMd" as="h6">
                                        Cart Add-Ons
                                    </Text>
                                    <InlineStack align='end' gap="400">
                                        <Link removeUnderline url='/cartaddon'>Edit Widgets</Link>
                                        <Button variant="primary" tone="success">Enable</Button>
                                    </InlineStack>
                                </InlineStack>
                                <Text as="p" tone="subdued">
                                    Appears on the Checkout Button click, Pop-up Widget
                                </Text>
                            </BlockStack>

                        </Card>
                    </Layout.Section>
                </Layout>
                <Layout>
                    <Layout.Section variant="oneThird">
                        <Text variant="headingMd" as="h6">
                            General Settings
                        </Text>
                        <Text as="p" tone="subdued">
                            Customize general settings like custom CSS.
                        </Text>
                    </Layout.Section>
                    <Layout.Section>
                        <Card>
                            <BlockStack gap="400">
                                <Text variant="headingMd" as="h6">
                                    Custom CSS
                                </Text>
                                <Text as="p" tone="subdued">
                                    Use this section only if you are a developer and know your way around CSS. Enter CSS only, you need not to specify Style tags. You can also <Link removeUnderline url='#'>contact our support team</Link> to modify the styling.
                                </Text>
                                <TextField
                                    // label="Shipping address"
                                    value={value}
                                    onChange={handleChange}
                                    multiline={7}
                                    autoComplete="off"
                                />
                                <InlineStack>
                                    <Button variant='primary'>Save</Button>
                                </InlineStack>
                            </BlockStack>
                        </Card>
                    </Layout.Section>
                </Layout>
            </BlockStack>
            {/* No space availabe at the bottom. So, additional blank Div is used. */}
            <div style={{ height: '50px' }}></div>
        </Page>
    );
};

export default Settings;