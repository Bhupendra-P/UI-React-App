import { useState, useCallback } from 'react';
import {
    BlockStack,
    Layout,
    Page,
    Banner,
    Text,
    // Link,
    Card,
    TextField,
    UnstyledLink
} from '@shopify/polaris';

function CartAddOn() {

    const [value3, setValue3] = useState('You might also like these');

    const handleChange3 = useCallback(
        (newValue) => setValue3(newValue),
        [],
    );

    const [value4, setValue4] = useState('Limited time offer. Expire in {{{Timer}}}');

    const handleChange4 = useCallback(
        (newValue) => setValue4(newValue),
        [],
    );

    const [value5, setValue5] = useState('Add');

    const handleChange5 = useCallback(
        (newValue) => setValue5(newValue),
        [],
    );
    const [value6, setValue6] = useState('Continue');

    const handleChange6 = useCallback(
        (newValue) => setValue6(newValue),
        [],
    );

    const [value7, setValue7] = useState('Total');

    const handleChange7 = useCallback(
        (newValue) => setValue7(newValue),
        [],
    );

    const [value8, setValue8] = useState('5');

    const handleChange8 = useCallback(
        (newValue) => setValue8(newValue),
        [],
    );
    return (
        <Page fullWidth
            backAction={{ content: 'Settings', url: '#' }}
            title="Cart Add-ons"
            primaryAction={{ content: 'Save', variant: "primary", tone: "success" }}
        >
            <BlockStack gap='600'>
                <Banner
                // onDismiss={() => { }}
                >
                    <Text variant="bodyLg" as="p">
                        The cart page product addons might not display if your theme uses a cart drawer. Please contact via live chat or email to <UnstyledLink url="mailto:support@risingsigma.com" style={{ color: 'black', fontWeight: 'bold', textDecoration: 'none' }}>support@risingsigma.com</UnstyledLink> for resolving this.
                    </Text>
                </Banner>
                <Layout>
                    <Layout.Section variant="oneThird">
                        <BlockStack gap="100">
                            <Text variant="headingMd" as="h6">
                                Text and Translations
                            </Text>
                            <Text as="p" tone="subdued">
                                Customize text and translations
                            </Text>
                        </BlockStack>
                    </Layout.Section>

                    <Layout.Section>
                        <Card>
                            <BlockStack gap="400">
                                <TextField
                                    label="Widget Title"
                                    value={value3}
                                    onChange={handleChange3}
                                    autoComplete="off"
                                />
                                <TextField
                                    label="Widget Discount Label"
                                    value={value4}
                                    onChange={handleChange4}
                                    autoComplete="off"
                                />
                                <TextField
                                    label="Add To Cart Button Label"
                                    value={value5}
                                    onChange={handleChange5}
                                    autoComplete="off"
                                />
                                <TextField
                                    label="Continue Button Label"
                                    value={value6}
                                    onChange={handleChange6}
                                    autoComplete="off"
                                />
                                <TextField
                                    label="Total Label"
                                    value={value7}
                                    onChange={handleChange7}
                                    autoComplete="off"
                                />
                                <TextField
                                    label="Countdown Timer (Minutes)"
                                    value={value8}
                                    onChange={handleChange8}
                                    autoComplete="off"
                                />
                                <Text variant="bodyMd" tone="subdued">
                                    The countdown time will be displayed only when there is a discount.
                                </Text>
                            </BlockStack>
                        </Card>
                        {/* No space availabe at the bottom. So, additional blank Div is used. */}
                        <div style={{ height: '50px' }}></div>

                    </Layout.Section>
                </Layout>
            </BlockStack>
        </Page>
    );
}

export default CartAddOn;