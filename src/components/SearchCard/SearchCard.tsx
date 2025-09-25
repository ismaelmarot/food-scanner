import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import axios from "axios";
import type { ProductProps } from "../../interfaces/Product.interface";

type SearchCardProps = {
  setProduct: React.Dispatch<React.SetStateAction<ProductProps | null>>;
  setError: React.Dispatch<React.SetStateAction<string>>;
  error: string;
};

const SearchCard: React.FC<SearchCardProps> = ({ setProduct, setError, error }) => {
  const [barcode, setBarcode] = useState("");

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
        setBarcode("");
      } else {
        setError("Product not found");
      }
    } catch {
      setError("Error fetching product");
    }
  };

  return (
    <Card style={{ width: "100%", maxWidth: "500px", padding: "1rem" }}>
      <h1 className="mb-3 text-center">Food Scanner</h1>
      <Form
        className="d-flex gap-2"
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          handleSearch();
        }}
      >
        <Form.Control
          type="text"
          placeholder="Enter barcode"
          value={barcode}
          onChange={(e) => setBarcode(e.target.value)}
        />
        <Button variant="primary" onClick={handleSearch}>
          Search
        </Button>
      </Form>
      {error && <p className="text-danger mt-3">{error}</p>}
    </Card>
  );
};

export default SearchCard;
