import React, { Component } from "react";

import { ProductConsumer } from "../globalData/Context";

export default class ListCategories extends Component {
  state = {
    search: "",
  };
  handleOnChange = (e) => {
    e.preventDefault();

    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div className="col-sm-12 col-md-3 col-lg-3">
        <ProductConsumer>
          {(value) => (
            <div class="input-group">
              <input
                autocomplete="off"
                type="text"
                class="form-control"
                placeholder="Chercher Produit..."
                name="search"
                value={this.state.search}
                onChange={this.handleOnChange}
                style={{ width: "200px", height: "66px" }}
              />
              <div
                class="input-group-append"
                id="button-addon4"
                style={{ display: "inline" }}
              >
                <button
                  class="btn btn-outline-secondary"
                  type="button"
                  onClick={(e) => value.searchProduct(e, this.state.search)}
                  style={{ backgroundColor: "black", color: "white" }}
                >
                  <i class="fas fa-search" />
                </button>
                <button
                  class="btn btn-outline-secondary"
                  type="button"
                  onClick={value.fetchProducts}
                >
                  <i class="fas fa-sync-alt" />
                </button>

                <hr />

                <span>Trier par date d'ajout : </span>
                <button
                  class="btn btn-outline-secondary"
                  onClick={value.sortDateAsc}
                  style={{ marginTop: "10px", marginRight: "7px" }}
                >
                  <i class="fas fa-sort-up" />
                </button>
                <button
                  class="btn btn-outline-secondary"
                  onClick={value.sortDateDesc}
                  style={{ marginTop: "10px" }}
                >
                  <i class="fas fa-sort-down" />
                </button>

                <br />
                <br />

                <span>Trier par prix : </span>
                <button
                  class="btn btn-outline-secondary"
                  onClick={value.sortPrixAsc}
                  style={{ marginTop: "10px", marginRight: "7px" }}
                >
                  <i class="fas fa-sort-up" />
                </button>
                <button
                  class="btn btn-outline-secondary"
                  onClick={value.sortPrixDesc}
                  style={{ marginTop: "10px" }}
                >
                  <i class="fas fa-sort-down" />
                </button>
              </div>
            </div>
          )}
        </ProductConsumer>

        <h2 style={{ marginBottom: "30px", marginTop: "50px" }}>Cat??gories</h2>
        <ProductConsumer>
          {(value) => {
            return (
              <>
                <h4
                  style={{ cursor: "pointer", marginBottom: "20px" }}
                  onClick={() => value.filterProductsByIdCat(1)}
                >
                  Textile
                </h4>
                <h4
                  style={{ cursor: "pointer", marginBottom: "20px" }}
                  onClick={() => value.filterProductsByIdCat(2)}
                >
                  Cuir
                </h4>
                <h4
                  style={{ cursor: "pointer", marginBottom: "20px" }}
                  onClick={() => value.filterProductsByIdCat(3)}
                >
                  Tapis
                </h4>
                <h4
                  style={{ cursor: "pointer", marginBottom: "20px" }}
                  onClick={() => value.filterProductsByIdCat(4)}
                >
                  Vannerie
                </h4>
                <h4
                  style={{ cursor: "pointer", marginBottom: "20px" }}
                  onClick={() => value.filterProductsByIdCat(5)}
                >
                  Broderie
                </h4>
              </>
            );
          }}
        </ProductConsumer>
      </div>
    );
  }
}
