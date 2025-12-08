// src/components/catalog/CatalogPage/index.jsx
import React from "react";
import { Styled } from "./styled";

const CatalogPage = () => {
    return (
        <Styled.Wrap>
            {/* Top header for the page */}
            <header className="pageHeader">
                <div className="titleBlock">
                    <h1 className="title">Product Catalog</h1>
                    <p className="subtitle">
                        Advanced, category-organized product display. All logic
                        is focused on grouping items by category, with a rich
                        UI wrapped around it.
                    </p>
                </div>

                <div className="metaBlock">
                    <span className="metaTag">Frontend only</span>
                    <span className="metaTag">Category-based</span>
                    <span className="metaTag">Demo project</span>
                </div>
            </header>

            {/* Main 3-column layout */}
            <div className="pageLayout">
                {/* LEFT: Category sidebar */}
                <aside className="sidebar">
                    <div className="panel">
                        <div className="panelHeader">
                            <span className="panelLabel">Categories</span>
                            <small className="panelHint">
                                Choose a category to refine the catalog view.
                            </small>
                        </div>
                        <div className="panelBody placeholderBlock">
                            Categories list will appear here.
                        </div>
                    </div>
                </aside>

                {/* CENTER: Main product grid area */}
                <section className="mainColumn">
                    <div className="panel mainPanel">
                        <div className="panelHeader mainHeaderRow">
                            <div>
                                <span className="panelLabel">
                                    Products by category
                                </span>
                                <small className="panelHint">
                                    The grid below will update when the selected
                                    category changes.
                                </small>
                            </div>

                            <div className="viewBadges">
                                <span className="pill">Grid view</span>
                                <span className="pill pillGhost">
                                    Advanced UI, simple logic
                                </span>
                            </div>
                        </div>

                        <div className="panelBody gridPlaceholder">
                            Product cards grid will be rendered here based on
                            the active category.
                        </div>
                    </div>
                </section>

                {/* RIGHT: Category info panel */}
                <aside className="infoPanel">
                    <div className="panel">
                        <div className="panelHeader">
                            <span className="panelLabel">
                                Category overview
                            </span>
                            <small className="panelHint">
                                Snapshot of the currently selected category.
                            </small>
                        </div>
                        <div className="panelBody placeholderBlock">
                            Summary, counts, and mini stats for the active
                            category will appear here.
                        </div>
                    </div>
                </aside>
            </div>
        </Styled.Wrap>
    );
};

export default CatalogPage;
