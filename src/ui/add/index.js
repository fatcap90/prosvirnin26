import React from 'react'


const index = () => {
    return(
        <div className="container pt-4">
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                           placeholder="Название изделия"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                        else.
                    </small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Descripton</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlFile1">Example file input</label>
                    <input type="file" className="form-control-file" id="exampleFormControlFile1"/>
                </div>

                <a href="lk">
                    <button type="submit" className="btn btn-primary">Сохранить</button>
                </a>
            </form>
        </div>


    );
}

export default index;