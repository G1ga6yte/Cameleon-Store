// components/ProductListPDF.js
import React from 'react';
import {
  Page, Text, View, Document, StyleSheet, Font
} from '@react-pdf/renderer';

// Styles
const styles = StyleSheet.create({
  page: { padding: 20, fontSize: 10 },
  title: { fontSize: 16, marginBottom: 10, textAlign: 'center' },
  table: { display: 'table', width: '100%', marginTop: 10, borderStyle: 'solid', borderWidth: 1 },
  tableRow: { flexDirection: 'row' },
  tableHeader: { backgroundColor: '#eee', fontWeight: 'bold' },
  cell: { flex: 1, padding: 4, borderRightWidth: 1, borderBottomWidth: 1 },
  lastCell: { borderRightWidth: 0 }
});

const ProductListPDF = ({ products }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.title}>Store Product List</Text>

      <View style={styles.table}>
        {/* Table Header */}
        <View style={[styles.tableRow, styles.tableHeader]}>
          <Text style={styles.cell}>Article</Text>
          <Text style={styles.cell}>Name</Text>
          <Text style={styles.cell}>Sell Price</Text>
          <Text style={styles.cell}>Enter Price</Text>
          <Text style={styles.cell}>In Stock</Text>
          <Text style={[styles.cell, styles.lastCell]}>Barcode</Text>
        </View>

        {/* Table Rows */}
        {products.map((p, idx) => (
          <View style={styles.tableRow} key={p._id}>
            <Text style={styles.cell}>{p.article}</Text>
            <Text style={styles.cell}>{p.name}</Text>
            <Text style={styles.cell}>${(p.sellPrice / 100).toFixed(2)}</Text>
            <Text style={styles.cell}>${(p.enterPrice / 100).toFixed(2)}</Text>
            <Text style={styles.cell}>{p.peacesInStore}</Text>
            <Text style={[styles.cell, styles.lastCell]}>{p.barCode}</Text>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

export default ProductListPDF;
