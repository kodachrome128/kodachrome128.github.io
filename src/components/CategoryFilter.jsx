import React, { useEffect, useState } from 'react';
import { items } from './ProjectsList'
import ProjectCard from '../components/ProjectCard';
import PopupImage from '../components/PopupImage';
import Button from './Button';
import LinkIcon from '@mui/icons-material/Link';

export default function CategoryFilter() {
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [filteredItems, setFilteredItems] = useState(items);

    let filters = ['3D Modelling', 'GameDev', 'Front-End', 'Photography']

    const handleFilterButtonClick = (selectedCategory) => {
        if (selectedFilters.includes(selectedCategory)) {
          let filters = selectedFilters.filter((el) => el !== selectedCategory);
          setSelectedFilters(filters);
        } else {
          setSelectedFilters([...selectedFilters, selectedCategory]);
        }
    };
        
    useEffect(() => {
        filterItems();
    }, [selectedFilters]);
        
    const filterItems = () => {
        if (selectedFilters.length > 0) {
            let tempItems = selectedFilters.map((selectedCategory) => {
                let temp = items.filter((item) => item.category === selectedCategory);
                return temp;
            });
            setFilteredItems(tempItems.flat());
        } else {
        setFilteredItems([...items]);
        }
      };
    
      return (
        <div className="projects-list">
            <br/>
            <h3 className="centered">Sort by category:</h3>
            <div className="buttons-container">
                {filters.map((category, idx) => (
                <button
                    onClick={() => handleFilterButtonClick(category)}
                    className={`button ${
                    selectedFilters?.includes(category) ? "active_button" : ""
                    }`}
                    key={`filters-${idx}`}
                >
                    {category}
                </button>
                ))}
            </div>
        
            <div className="project-tiles-desktop">
                {filteredItems.map((item, idx) => (
                    <ProjectCard key={`items-${idx}`} className="item">
                        <div className="blur-container"></div>
                        <div className="project-tile">
                            <div className={`project-card-title ${item.bg_img}`}>
                                <h2 className="project-img-desktop-text padding highlight">{item.name}</h2>
                            </div>
                            <div className="project-card-info padding">
                                <p>CATEGORY: {item.category}</p>            
                                <p>{item.description}</p>
                            </div>
                            <div className="project-links">
                            {item.images.length > 0 ? (
                                <PopupImage images={item.images} active={1} setActive={1} />
                            ) : null}
                            {item.link}
                            </div>
                        </div>
                    </ProjectCard>
                ))}
            </div>
        </div>
      );
    }
    