import React, { useState } from "react";
import axios from 'axios';
import type { SearchCardProps } from '../../interfaces/SearchCard.interface';
import { ButtonStyled, FormControlStyled, FormStyled, H1, SearchCardWrapper } from "./SearchCard.styled";

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
            <H1>Food Scanner</H1>
            <FormStyled
                onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                    e.preventDefault();
                    handleSearch();
                }}
            >
                <FormControlStyled
                    type='text'
                    placeholder="Enter barcode"
                    value={barcode}
                    onChange={(e) => setBarcode(e.target.value)}
                />
                <ButtonStyled variant='primary' onClick={handleSearch}>
                    Search
                </ButtonStyled>
            </FormStyled>
            {error && <p className='text-danger mt-3'>{error}</p>}
        </SearchCardWrapper>
    );
};

export default SearchCard;
