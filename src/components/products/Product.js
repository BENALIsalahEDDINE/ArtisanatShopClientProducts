import React, { Component } from "react";

import { Link } from "react-router-dom";

import { ProductConsumer } from "../globalData/Context";

export default class Product extends Component {
  state = {
    nomCat: "",
  };

  checkCategory = () => {
    const { idCat } = this.props.product;
    if (idCat === 1) {
      this.setState({ nomCat: "Textile" });
    } else if (idCat === 2) {
      this.setState({ nomCat: "Cuir" });
    } else if (idCat === 3) {
      this.setState({ nomCat: "Tapis" });
    } else if (idCat === 4) {
      this.setState({ nomCat: "Vannerie" });
    } else if (idCat === 5) {
      this.setState({ nomCat: "Broderie" });
    }
  };

  componentDidMount = () => {
    this.checkCategory();
  };
  render() {
    const {
      id,
      nom,
      description,
      unit,
      source,
      etat,
      prix,
      qte,
      url,
    } = this.props.product;
    return (
      <>
        <div
          className="grid-item kids col-sm-12 col-md-4 col-lg-4"
          style={{ display: "block" }}
        >
          <div className="grid-item__content-wrapper">
            <div className="ps-shoe mb-30">
              <div className="ps-shoe__thumbnail">
                <div className="ps-badge ps-badge--sale ps-badge--2nd" style={{ width: "40px" }}>
                  <span style={{ fontSize: "12px" }}>New</span>
                </div>
                {/* <div className="ps-badge ps-badge--sale ps-badge--2nd">
                  <span>Excusif</span>
    </div> */}
                
                <img
                  src={url}
                  alt={nom}
                  style={{ height: "170px", width: "200px" }}
                />

                <ProductConsumer>
                  {(value) => {
                    return (
                      <Link
                        to="/detail"
                        className="ps-shoe__overlay"
                        onClick={() => value.handleDetail(id)}
                      />
                    );
                  }}
                </ProductConsumer>
              </div>
              <div className="ps-shoe__content">
                <div className="ps-shoe__variants">
                  <div className="ps-shoe__variant normal">
                    <ProductConsumer>
                      {(value) => (
                        <button
                          class="ps-cart__toggle"
                          style={{ marginLeft: "230px", maginTop: "10px" }}
                          onClick={() => value.addToCart(id)}
                        >
                          <i class="ps-icon-shopping-cart" />
                        </button>
                      )}
                    </ProductConsumer>
                  </div>
                </div>
                <div className="ps-shoe__variants">
                 {/* <div className="ps-shoe__variant normal">
                    <img src="images/bio-product/2.jpg" alt="" />
                    <img src="images/bio-product/3.jpg" alt="" />
                    <img src="images/bio-product/4.jpg" alt="" />
                    <img src="images/bio-product/5.jpg" alt="" />
                  </div>*/}
                  <select className="ps-rating ps-shoe__rating">
                    <option value="1">1</option>
                    <option value="1">2</option>
                    <option value="1">3</option>
                    <option value="1">4</option>
                    <option value="2">5</option>
                  </select>
                </div> 
                <div className="ps-shoe__detail">
                  <a
                    className="ps-shoe__name"
                    href="#"
                    style={{ fontSize: "16px" }}
                  >
                    {nom}
                  </a>
                  <p className="ps-shoe__categorie">({unit})</p>

                  <p className="ps-shoe__categories">
                    <a href="#">{this.state.nomCat}</a>
                  </p>
                  <span
                    className="ps-shoe__price"
                    style={{ fontSize: "16px", marginTop: "25px" }}
                  >
                    {/* <del>{prix + 12}DH</del> */}
                    {prix}DH
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
