import React, { useState } from "react";
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import type { SearchCardProps } from '../../interfaces/SearchCard.interface';
import { SearchCardWrapper } from "./SearchCard.styled";

const SearchCard: React.FC<SearchCardProps> = ({ setProduct, setError, error }) => {
    const [barcode, setBarcode] = useState('');

    const handleSearch = async () => {
        if (!barcode) return;
        try {
        setError("");
        setProduct(null);
        const res = await axios.get(
            `https://world.openfoodfacts.org/api/v0/product/${barcode}.json`
        );
        if (res.data.status === 1) {
            setProduct(res.data.product);
            setBarcode('');
        } else {
            setError("Product not found");
        }
        } catch {
        setError("Error fetching product");
        }
    };

    return (
        <SearchCardWrapper>
            <h1 className='mb-3 text-center'>Food Scanner</h1>
            <Form
                className='d-flex gap-2'
                onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                    e.preventDefault();
                    handleSearch();
                }}
                style={{border:'2px solid red', display:'flex', flexDirection:'column'}}
            >
                <Form.Control
                    type='text'
                    placeholder="Enter barcode"
                    value={barcode}
                    onChange={(e) => setBarcode(e.target.value)}
                />
                <Button variant='primary' onClick={handleSearch}>
                    Search
                </Button>
            </Form>
            {error && <p className='text-danger mt-3'>{error}</p>}
        </SearchCardWrapper>
    );
};

export default SearchCard;
