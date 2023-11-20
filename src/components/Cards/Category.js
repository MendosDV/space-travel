import '../../styles/Category.scss'

function Category({ categories, activeCategory, setCategory }) {
  const handleCategorie = (e) => {
    setCategory(e.target.value);
  }

  return (
    <div className='category'>
      <p className='category-title'>Choose by type of planete</p>
      <select className='category-select' value={activeCategory} onChange={handleCategorie}>
        <option className='category-option' value='all'>All</option>
        {categories.map((categorie) => (
          <option className='category-option' key={categorie} value={categorie}>
            {categorie}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Category;
