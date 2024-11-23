<template>
        <nav>
            <ul>
                <li><a href="#">World</a></li>
                <li><a href="#">Characters</a></li>
                <li><a href="#">Author</a></li>
            </ul>
        </nav>
</template>

<style scoped>
nav ul{
    background-color: grey;
    display: flex;
    justify-content: center;
    padding: 2rem;
    gap: 4rem;
    margin: 0;
}
nav li{
    list-style: none;
    font-family: "Exo", sans-serif;
    font-weight: 600;
}
nav a{
    text-decoration: none;
    text-transform: uppercase;
    color: white;
    position: relative;
}
nav a::before{
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    border-radius: 4px;
    background-color: orange;
    bottom: 0;
    left: 0;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform .3s ease-in-out;
}
nav a:hover::before{
    transform-origin: left;
    transform: scaleX(1);
}
</style>