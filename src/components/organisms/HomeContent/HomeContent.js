import React from 'react';
import SearchBar from '../../molecules/SearchBar/SearchBar';
import Card from "../../molecules/Card/Card";
import MainTitle from "../../atoms/MainTitle/MainTitle"
import FilterBar from '../../molecules/FilterBar/FilterBar';
import "./homeContent.css";


const HomeContent =({texto,titulo, onClick,handleFilters, type,placeholder,value, onChange,data,filters}) =>{
    return(
        <main className="homeContent--container">
                <MainTitle texto={titulo}/>
                <section>
                    <SearchBar
                    texto={texto} 
                    onClick={onClick}
                    type={type} 
                    placeholder={placeholder} 
                    titulo={titulo}
                    value={value} 
                    onChange={onChange}
                    />
                    <FilterBar 
                    filters={filters} 
                    onClick={handleFilters} />
                </section>
                <section>
                    {data.length ? (
                        data.map(item => {
                            const{logo,company,position,postedAt,contract,location,languages,tools} = item;
                            return(
                                <Card
                    logo={logo}
                     company = {company}
                     position = {position}
                     postedAt={postedAt}
                     contract={contract}
                     location={location}
                     tools={tools}
                     languages={languages}
                    />
                            )
                        })
                    
                    ):(
                        <h2>Nenhuma vaga foi encontrada</h2>
                    )}
                </section>
                </main>

    )
}

export default HomeContent;