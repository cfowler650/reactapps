import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

  // {} extracts that specific
  function RenderDish( {dish} ) {
        if (dish != null) {
          return (
            <div className="col-md-5 ml-1">
              <Card>
                <CardImg width="100%" object src={dish.image} alt={dish.name} />
                <CardBody>
                  <CardTitle heading>{dish.name}</CardTitle>
                  <CardText>{dish.description}</CardText>
                </CardBody>

              </Card>
            </div>
          );
        }
        else {
          return (
            <div></div>
          )
        }
    }

    function RenderComments({ comments }) {
      if (comments != null) {
        return (
          <div className="col-12 col-md-5 ml-2">
            <Card style={{ border: "none" }}>
              <CardImg width="100%" />
              <CardBody>
                <CardTitle heading><h2>Comments</h2></CardTitle>
                <CardText>
                  {
                    comments.map(commentObj => {
                      return (
                        <ul className="list-unstyled">
                          <li key={commentObj.id} className="list-unstyled mt-2 mb-2">

                            {commentObj.comment}

                          </li>

                          <li className="list-unstyled mt-2 mb-2">
                            -- {commentObj.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(commentObj.date)))}
                          </li>

                        </ul>
                      )
                    }
                    )
                  }
                </CardText>
              </CardBody>

            </Card>
          </div>
        )
      } else {
        return (
          <div></div>
        )
      }
    }



    const DishDetail = (props) =>  {

      return(

        <div className="container">
          <div className="row">
            <Breadcrumb>
              <BreadcrumbItem> <Link to='/menu'>Menu</Link> </BreadcrumbItem>
              <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
              <h3>{props.dish.name}</h3>
              <hr />
            </div>
          </div>

          <div className="row">
            <RenderDish dish={props.dish} />
            <RenderComments comments={props.comments}/>
          </div>
        </div>
        )
      }

export default DishDetail;