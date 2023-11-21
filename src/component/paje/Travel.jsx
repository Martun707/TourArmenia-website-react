// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import ButtonBase from '@mui/material/ButtonBase';
//
//
//
// function Travel(){
//     const images = [
//         {
//             url: 'https://newcdn.igromania.ru//r/3f19e8c524c6c576984cbd7fe2b9ef9a/1040x-/newcdn.igromania.ru/mnt/news/c/a/a/c/3/2/126343/html/more/_a282d19b726a3377ed0c8a8_1920xH.jpg',
//             title: 'Тайлер Рейк 2',
//             width: '33.3%',
//
//         },
//         {
//             url: 'https://static.okko.tv/images/v2/21112925?scale=1&quality=80',
//             title: 'Беглец',
//             width: '33.3%',
//         },
//         {
//             url: 'https://thumbs.dfs.ivi.ru/storage33/contents/e/c/d39337cd59b87ad5dfeeaef8cbf4f7.jpg/858x483//?q=85',
//             title: 'Кунг-фу жеребец',
//             width: '33.3%',
//         },
//         {
//             url: 'https://mma.metaratings.ru/storage/images/0b/52/0b527ae96c38379c1c1d8019c50eaa03.jpg',
//             title: '\n' +
//                 'Джон Уик 4',
//             width: '33.3%',
//
//         },    {
//             url: 'https://i.ytimg.com/vi/isKuAfJfJJo/sddefault.jpg',
//             title: 'Гипнотик',
//             width: '33.3%',
//         },    {
//             url: 'https://thumbs.dfs.ivi.ru/storage33/contents/7/d/841eaea6ead886f431dd408bfe5cef.jpg/400x226//',
//             title: 'Кровь за кровь',
//             width: '33.3%',
//         },
//         ,    {
//             url: 'https://zetimage.net/uploads/posts/2023-05/1683576643_ryczod1.jpg',
//             title: 'Рыцари Зодиака',
//             width: '33.3%',
//         },
//         ,    {
//             url: 'https://www.film.ru/sites/default/files/styles/thumb_1024x450/public/filefield_paths/les_trois_mousquetaires.jpeg',
//             title: 'Три мушкетёра: Д\'Артаньян ',
//             width: '33.3%',
//         },
//         ,    {
//             url: 'https://zetimage.net/uploads/posts/2023-03/1679527614_sem-korolej.jpg',
//             title: 'Последнее королевство: Семь королей должны умереть',
//             width: '33.3%',
//         },
//
//     ];
//
//     const ImageButton = styled(ButtonBase)(({ theme }) => ({
//         position: 'relative',
//         height: 200,
//         [theme.breakpoints.down('sm')]: {
//             width: '100% !important', // Overrides inline-style
//             height: 100,
//         },
//         '&:hover, &.Mui-focusVisible': {
//             zIndex: 1,
//             '& .MuiImageBackdrop-root': {
//                 opacity: 0.15,
//             },
//             '& .MuiImageMarked-root': {
//                 opacity: 0,
//             },
//             '& .MuiTypography-root': {
//                 border: '4px solid currentColor',
//             },
//         },
//     }));
//
//     const ImageSrc = styled('span')({
//         position: 'absolute',
//         left: 0,
//         right: 0,
//         top: 0,
//         bottom: 0,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center 40%',
//     });
//
//     const Image = styled('span')(({ theme }) => ({
//         position: 'absolute',
//         left: 0,
//         right: 0,
//         top: 0,
//         bottom: 0,
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         color: theme.palette.common.white,
//     }));
//
//     const ImageBackdrop = styled('span')(({ theme }) => ({
//         position: 'absolute',
//         left: 0,
//         right: 0,
//         top: 0,
//         bottom: 0,
//         backgroundColor: theme.palette.common.black,
//         opacity: 0.4,
//         transition: theme.transitions.create('opacity'),
//     }));
//
//     const ImageMarked = styled('span')(({ theme }) => ({
//         height: 3,
//         width: 18,
//         backgroundColor: theme.palette.common.white,
//         position: 'absolute',
//         bottom: -2,
//         left: 'calc(50% - 9px)',
//         transition: theme.transitions.create('opacity'),
//     }));
//     return(
//
//     <>
//
//             <div className="asd">Travel</div>
//         <br/>
//         <br/>
//         <br/>
//         <br/>
//
//
//
//
//         <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
//             {images.map((image) => (
//                 <ImageButton
//                     focusRipple
//                     key={image.title}
//                     style={{
//                         width: image.width,
//                     }}
//
//                 >
//
//                     <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
//                     <ImageBackdrop className="MuiImageBackdrop-root" />
//                     <Image>
//                         <span>{image.title}</span>
//                     </Image>
//                 </ImageButton>
//
//             ))}
//         </Box>
//
//
//
// </>
//     )
// }
// export default Travel

import HomeCard from "./card/Box";

function Travel(){
    return(
        <>
           <div className="asd">Travel</div>
            <br/>
            <br/>
            <br/>
            <br/>
            <HomeCard/>
        </>
    )
}
export default Travel