import React from 'react';
import { useState, useCallback } from 'react';
import {
    Page,
    Card,
    Layout,
    BlockStack,
    Text,
    RadioButton,
    Button,
    InlineStack,
    ChoiceList,
    Select,
    Box,
    TextField
} from '@shopify/polaris';

function OfferSetup() {

    const [value1, setValue] = useState('disabled');

    const handleChange1 = useCallback(
        (_, newValue) => setValue(newValue),
        [],
    );

    const [selected, setSelected] = useState(['hidden']);

    const handleChange2 = useCallback((value) => setSelected(value), []);

    const [value, setValue1] = useState('Hi, Bairagi');

    const handleChange = useCallback(
        (newValue) => setValue1(newValue),
        [],);


    return (
        <Page fullWidth
            backAction={{ content: 'Settings', url: '#' }}
            title="Offer Setup"
            primaryAction={{ content: 'Save', tone: 'success', size: 'large' }}
        >
            <BlockStack gap="1000">
                <Layout>
                    <Layout.Section variant="oneThird">
                        <BlockStack gap="100">
                            <Text variant="headingMd" as="h6">Upsell Type</Text>
                            <Text variant="bodyMd" tone="subdued">Select an offer</Text>
                        </BlockStack>
                    </Layout.Section>
                    <Layout.Section>
                        <Card>
                            <BlockStack gap="400">
                                <Text variant="headingMd" as="h6">Placement</Text>
                                <Text variant="bodyMd" tone="subdued">Product Page</Text>
                                <Text variant="headingMd" as="h6">Type</Text>
                                <Text variant="bodyMd" tone="subdued">Frequently Baught Together</Text>
                                <Text variant="bodySm" tone="subdued">Displays an Amazon style frequently bought together bundle on the product page.
                                    For example, if you sell Burgers, you can bundle French Fries along with it.</Text>
                            </BlockStack>
                        </Card>
                    </Layout.Section>
                </Layout>
                <Layout>
                    <Layout.Section variant="oneThird">
                        <BlockStack gap="100">
                            <Text variant="headingMd" as="h6">Trigger</Text>
                            <Text variant="bodyMd" tone="subdued">Select the products that triggers the offer</Text>
                        </BlockStack>
                    </Layout.Section>
                    <Layout.Section>
                        <Card>
                            <BlockStack gap="400">
                                <Text variant="headingMd" as="h6">Offer is triggered for</Text>
                                <BlockStack gap="0">
                                    <RadioButton
                                        label="Specific Products"
                                        // helpText="Customers will only be able to check out as guests."
                                        checked={value1 === 'disabled'}
                                        id="disabled"
                                        name="accounts"
                                        onChange={handleChange1}
                                    />
                                    <RadioButton
                                        label="All Products"
                                        // helpText="Customers will be able to check out with a customer account or as a guest."
                                        id="optional"
                                        name="accounts"
                                        checked={value1 === 'optional'}
                                        onChange={handleChange1} />
                                </BlockStack>
                                <InlineStack>
                                    <Button size="large">
                                        Select Products
                                    </Button>
                                </InlineStack>
                                <Text variant="bodySm" tone="subdued">
                                    Example: If you upsell French Fries along with the burger,
                                    the burger will be the trigger product.
                                </Text>
                            </BlockStack>
                        </Card>
                    </Layout.Section>
                </Layout>
                <Layout>
                    <Layout.Section variant="oneThird">
                        <BlockStack gap="400">
                            <Text variant="headingMd" as="h6">Offer Products</Text>
                            <Text variant="bodyMd" tone="subdued">Select the products to upsell/cross-sell</Text>
                        </BlockStack>
                    </Layout.Section>
                    <Layout.Section>
                        <Card>
                            <BlockStack gap="400">
                                <Text variant="headingMd" as="h6">Select the products to upsell</Text>
                                <InlineStack>
                                    <Button size="large">
                                        Select Products
                                    </Button>
                                </InlineStack>
                                <Text variant="bodySm" tone="subdued">
                                    Example: If you upsell French Fries along with the burger,
                                    the French fries will be the upsell product.
                                </Text>
                            </BlockStack>
                        </Card>
                    </Layout.Section>
                </Layout>
                <Layout>
                    <Layout.Section variant="oneThird">
                        <BlockStack gap="400">
                            <Text variant="headingMd" as="h6">Discount</Text>
                            <Text variant="bodyMd" tone="subdued">Setup bundle discount for product page upsell</Text>
                        </BlockStack>
                    </Layout.Section>
                    <Layout.Section>
                        <Card>
                            <BlockStack gap="400">
                                <Text variant="headingMd" as="h6">Select Discount Type</Text>
                                <ChoiceList
                                    // title="Company name"
                                    choices={[
                                        { label: 'Percentage of Fixed Value', value: 'hidden' },
                                        { label: 'Cheapest Item Free', value: 'optional' },
                                        { label: 'Free Shipping', value: 'required' },
                                        { label: 'No Discount', value: '@SBairagi' },
                                    ]}
                                    selected={selected}
                                    onChange={handleChange2}
                                />
                                <BlockStack gap="050">
                                    <Text>Discount Value</Text>
                                    <InlineStack align="space-between">
                                        <Box minWidth="735px">
                                            <Select
                                            // label="Discount Value"
                                            // options={options}
                                            // onChange={handleSelectChange}
                                            // value={selected}
                                            />
                                        </Box>
                                        <Box minWidth="80px">
                                            <Select
                                            // label="Discount Value"
                                            // options={options}
                                            // onChange={handleSelectChange}
                                            // value={selected}
                                            />
                                        </Box>
                                    </InlineStack>
                                </BlockStack>
                                <BlockStack gap="025">
                                    <Text>Discount Text</Text>
                                    <TextField
                                        // label="Discount Text"
                                        value={value}
                                        onChange={handleChange}
                                        autoComplete="off"
                                    />
                                </BlockStack>
                            </BlockStack>
                        </Card>
                    </Layout.Section>
                </Layout>
            </BlockStack>
            <div style={{ height: '50px' }}></div>
        </Page>
    );
}


export default OfferSetup;