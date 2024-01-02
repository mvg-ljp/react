/* eslint-disable react-hooks/exhaustive-deps */

import { useState, useEffect } from "react";
import { collection, getDocs, getFirestore, getDoc, doc, query, where} from "firebase/firestore";

export const useAllProducts = (collectionName) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const db = getFirestore();
    const productscollection = collection(db, "products");

    getDocs(productscollection)
      .then((snapshop) => {
        const data = snapshop.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(data);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return { products, loading, error };
};

export const useSingleProduct = (id) => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    
    const db = getFirestore();
    const docRef = doc(db, "products", id);

    getDoc(docRef)
      .then((snapshot) => {
        setProduct({ id: snapshot.id, ...snapshot.data() });
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));

  }, []);

  return { product, loading, error };
};

export const useAllProductsByFilter = (collectionName, categoryId, fieldToFilter) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const db = getFirestore();
    const collectionRef = collection(db, collectionName);

    const categoryQuery = query(collectionRef, where(fieldToFilter, "==", categoryId))

    getDocs(categoryQuery)
      .then((res) => {
        const data = res.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(data);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));

  }, [categoryId]);

  return { products, loading, error };
};