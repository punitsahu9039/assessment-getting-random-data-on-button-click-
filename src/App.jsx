import { useState, useEffect } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Loader from "./components/Loader";



const App = () => {
  const [myfunction, setmyfunction] = useState([]);
  const [flag, setFlag] = useState(false)
  const [randomNum, generaterandomNum] = useState(3);

  const postId = () => {
    const Number = Math.floor(Math.random() * 10) + 1;
    generaterandomNum(Number);
    setFlag(true);

  }

  const loaddata = () => {
    let url = `https://jsonplaceholder.typicode.com/posts/${randomNum}/comments`
    axios.get(url).then((res) => {

      setmyfunction(res.data);
      setFlag(false);
    });
  };

  useEffect(() => {
    loaddata();

  }, [randomNum])

  let sno = 0;

  const answer = myfunction.map((res) => {
    sno++;

    return (

      <>

        <tbody>
          <tr>
            <td>{sno}</td>
            <td>{res.postId}</td>
            <td>{res.email}</td>
            <td>{res.body}</td>
          </tr>

        </tbody>
      </>
    );
  });

  return (
    <>
      <div className="parent">
        <div className="container-1">
          <h4 style={{ color: "#00aae5", fontFamily: "initial" }}>Latent Bridge Assignment..</h4>
          <Button variant="outline-primary" onClick={postId}>
            Generate Random ID</Button >{' '}
        </div>


        <div className="container-2">
          {flag ? (
            <Loader />
          ) : (
            <Table striped bordered hover style={{ width: "80%" }}>

              <thead>
                <tr>
                  <th>S.no</th>
                  <th>PostId</th>
                  <th>Email</th>
                  <th>Body</th>
                </tr>
              </thead>

              {answer}

            </Table>

          )}
        </div>
      </div>
    </>
  )
}
export default App;
