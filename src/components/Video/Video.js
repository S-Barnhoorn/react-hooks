import React, {useRef} from 'react';
import styles from './Video.module.css'
import videoBg2 from '../../assets/vecteezy_century-leaf-falling-autumn-maple-leaves-falling-maple_9295638_532.mp4';


const Video = () => {

    return (
        <div>
            <video src={videoBg2} className={styles['video-background']} autoPlay loop muted/>
        </div>
    );
};

export default Video;