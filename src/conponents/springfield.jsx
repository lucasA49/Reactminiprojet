function Springfield ({Simpson}) {

    return (<>
        {(Simpson1.imgSrc) ? <img src={Simpson1.imgSrc} alt="" /> : imgSrc={Simpson2} }
        
      
          <p>{Simpson.name}</p>
        </>
      
            )
        }
        Springfield.propTypes = {
        Simpson: PropTypes.shape({
          imgSrc: PropTypes.string,
          name: PropTypes.string.isRequired
        })
        };
export default Springfield