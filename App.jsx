import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"

export default function App(){

    const categories=['Men','Women','Kids',]
    return(
        <>
        <main className="container py-3">
            <article>
                <div className="row">
                    <div className="col-md-4">
                <div className="d-flex justify-content-center my-3">
                    <img src="https://files.oaiusercontent.com/file-WNk125eicU6AgQLwUduTxA?se=2024-12-03T11%3A22%3A19Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Db6d19781-a422-4aef-a33a-569c27b59700.webp&sig=hoKgoTxmNUx5wqPXHNYoxYtOK9sarUz09sAI8HPcBeM%3D" alt="mens"/>
                    <img src="" alt="womens"/>
                    <img src="https://files.oaiusercontent.com/file-AoNcNoZqnbQpHUZQ1DfuMq?se=2024-12-03T11%3A24%3A55Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D75f88523-41ab-489f-b89f-6b3f94be59a0.webp&sig=9oZpUC8u7ZdonnDIRGbTMc8VYDuTdYyPwZN3dOukHF0%3D" alt="kids"/>
       
                </div>
                </div>
                </div>
            </article>
        </main>
        </>
    )
}