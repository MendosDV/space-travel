import '../../styles/ListLinks.scss';

function ListLinks({ children, sections }) {
  return (
    <div className='list-links'>
      <h5>{children}</h5>
      {sections.map((section) => (
        <p key={section}>{section}</p>
      ))}

    </div>
  )
}

export default ListLinks;
