// rsc - Arrow function komponentni professional ochish
import React, {useEffect, useState} from 'react';
import axios from "axios";
// count - this.state.value
// setCount - this.setState{this.state.value}
// count:0
const Counter = () => {
    // useState()
    const[count, setCount] = useState(0);
    const [post,setPosts] = useState([]);
    // ikkalasini vazifasini bittada bajaradi
    // componentDidMount
    // componentDidUpdate
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((res) => {
                console.log(res);
                setPosts(res.data);
            })
    }, []);
    return (
        <>
          <div className="container">
              <div className="row">
                  <div className="col-4 mt-3 offset-4">
                      <div className="card">
                          <div className="card-header">
                              <h1 className="text-center">Counter</h1>
                          </div>
                          <div className="card-body">
                              <h2 className="text-center">{count}</h2>
                          </div>
                          <div className="card-footer d-flex justify-content-between">
                              <button className="btn btn-success" onClick={() => setCount(count+1)}>+</button>
                              <button className="btn btn-danger" onClick={() => setCount(count-1)}>-</button>
                          </div>
                      </div>
                  </div>
                  {post.map((item,index) => {
                      return(
                          <div className="col-4 mt-3">
                              <div className="card">
                                  <div className="card-header">
                                      <h4>{item.title.slice(0,20)}</h4>
                                  </div>
                                  <div className="card-body">
                                      <h4> {item.body}</h4>
                                  </div>
                              </div>
                          </div>
                      )
                  })}
              </div>
          </div>
        </>
    );
};
export default Counter;