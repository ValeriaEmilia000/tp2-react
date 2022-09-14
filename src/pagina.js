import React from "react";
import Pagination from 'react-bootstrap/Pagination';

function Pagina(){

    return(
    <nav aria-label="Page navigation example" style="display: flex ; justify-content:center">
    <ul class="pagination justify-content-center">
        <li class="page-item disabled">
            <a class="page-link">Anterior</a>
        </li>
        <li class="page-item">
            <a class="page-link" href="#">1</a>
        </li>
        <li class="page-item">
            <a class="page-link" href="#">2</a>
        </li>
        <li class="page-item">
            <a class="page-link" href="#">3</a>
        </li>
        <li class="page-item">
            <a class="page-link" href="#">Siguiente</a>
        </li>
    </ul>
</nav>
    )
}

export default Pagina;
