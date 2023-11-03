import { useState, useCallback } from 'react';
import {
    Page,
    Card,
    Layout,
    Text,
    Select,
    BlockStack,
    TextField
} from '@shopify/polaris';

function EditFBT() {

    const [selected1, setSelected1] = useState('Below the Product form');

    const handleSelectChange1 = useCallback(
        (value1) => setSelected1(value1),
        [],
    );

    const options1 = [
        { label: 'Above the product form', value: 'above' },
        { label: 'Beside the product form', value: 'beside' },
        { label: 'This is dummy, Shashi', value: 'behind' }, // Dummies Used 
    ];
    const [selected2, setSelected2] = useState('Below the Product form');

    const handleSelectChange2 = useCallback(
        (value2) => setSelected2(value2),
        [],
    );

    const options2 = [
        { label: 'Below the product form', value: 'above' },
        { label: 'Beside the product form', value: 'beside' },
        { label: 'This is dummy, Shashi', value: 'behind' }, // Dummies Used 
    ];

    const [value3, setValue3] = useState('Frequently Baught Together');

    const handleChange3 = useCallback(
        (newValue) => setValue3(newValue),
        [],
    );

    const [value4, setValue4] = useState('Total Price');

    const handleChange4 = useCallback(
        (newValue) => setValue4(newValue),
        [],
    );

    const [value5, setValue5] = useState('Add To Cart');

    const handleChange5 = useCallback(
        (newValue) => setValue5(newValue),
        [],
    );
    const [value6, setValue6] = useState('This Item:');

    const handleChange6 = useCallback(
        (newValue) => setValue6(newValue),
        [],
    );

    const [value7, setValue7] = useState('Discount {{}} bundle offer on checkout');

    const handleChange7 = useCallback(
        (newValue) => setValue7(newValue),
        [],
    );

    const [value8, setValue8] = useState('Your discount will be applied at checkout');

    const handleChange8 = useCallback(
        (newValue) => setValue8(newValue),
        [],
    );



    return (
        <Page fullWidth backAction={{ content: 'Settings', url: '#' }} title="Frequently Baught Together" primaryAction={{ content: 'Save', variant: "primary", tone: "success" }}>
            <BlockStack gap="600">
                <Layout>
                    <Layout.Section variant="oneThird">
                        <BlockStack gap="100">
                            <Text variant="headingMd" as="h6">
                                Position
                            </Text>
                            <Text as="p" tone="subdued">
                                Set your widget position.
                            </Text>
                        </BlockStack>
                    </Layout.Section>
                    <Layout.Section>
                        <Card>
                            <BlockStack gap="400">
                                <Text fontWeight="bold">
                                    Widget Positioning
                                </Text>
                                <Select
                                    label="Where do you want to place the widget?"
                                    options={options1}
                                    onChange={handleSelectChange1}
                                    value={selected1}
                                />
                            </BlockStack>
                        </Card>

                    </Layout.Section>
                </Layout>
                <Layout>
                    <Layout.Section variant="oneThird">
                        <BlockStack gap="100">
                            <Text variant="headingMd" as="h6">
                                Settings
                            </Text>
                            <Text as="p" tone="subdued">
                                Customize offers displayed in this widget.
                            </Text>
                        </BlockStack>
                    </Layout.Section>
                    <Layout.Section>
                        <Card>
                            <BlockStack gap="400">
                                <Text fontWeight="bold">
                                    Widget Positioning
                                </Text>
                                <Select
                                    label="Where do you want to place the widget?"
                                    options={options2}
                                    onChange={handleSelectChange2}
                                    value={selected2}
                                />
                            </BlockStack>
                        </Card>

                    </Layout.Section>
                </Layout>
                <Layout>
                    <Layout.Section variant="oneThird">
                        <BlockStack gap="100">
                            <Text variant="headingMd" as="h6">
                                Text and Translation
                            </Text>
                            <Text as="p" tone="subdued">
                                Customize text and translations.
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
                                    label="Total Price Lable"
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
                                    label="This Item Label"
                                    value={value6}
                                    onChange={handleChange6}
                                    autoComplete="off"
                                />
                                <TextField
                                    label="Discount Label"
                                    value={value7}
                                    onChange={handleChange7}
                                    autoComplete="off"
                                />
                                <TextField
                                    label="Cart Page discount Message"
                                    value={value8}
                                    onChange={handleChange8}
                                    autoComplete="off"
                                />
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

export default EditFBT;