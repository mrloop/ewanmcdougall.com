# Early Video works

## Encode video

https://trac.ffmpeg.org/wiki/Encode/VP9
https://ffmpeg.org/ffmpeg-all.html

### 720x576 DVPAL

* to webm see `to_webm`
* to h264 see `to_mp4`

```

https://trac.ffmpeg.org/wiki/Encode/H.264

* to mp4 do

```

```

* to grad a poster frame do

```

```

Use `mpv --screenshot-format=%P movie-filepath` then prese `s` to capture screenshot with timestamp `.` + `.` to navigate

* esent nature

    ./dvpal_to_mp4 original_videos/esent/nature/esent.c.audio video/esent-nature
    ./dvpal_to_webm original_videos/esent/nature/esent.c.audio video/esent-nature
    ./dvpal_poster original_videos/esent/nature/esent.c.audio 00:00:58.900 poster/esent-nature

* say nothing add `-ss 00:00:06.000` for video output to trim start

    ./dvpal_to_mp4 original_videos/saynothing.mov video/say-nothing
    ./dvpal_to_webm original_videos/saynothing.mov video/say-nothing
    ./dvpal_poster original_videos/saynothing.mov 00:01:45.000 poster/say-nothing

* esent city LOOPED

    ./dvpal_to_webm original_videos/esent/esent-city/esent_city-fin.mov video/esent-city &&\
    ./dvpal_to_mp4 original_videos/esent/esent-city/esent_city-fin.mov video/esent-city &&\
    ./dvpal_poster original_videos/esent/esent-city/esent_city-fin.mov 00:01:46.640 poster/esent-city

# not not box

    ./dvpal_to_webm original_videos/not-not-box/not-not-box-titles.mov video/not-not-box &&\
    ./dvpal_to_mp4 original_videos/not-not-box/not-not-box-titles.mov video/not-not-box &&\
    ./dvpal_poster original_videos/not-not-box/not-not-box-titles.mov 00:00:10.000 poster/not-not-box &&\

# your save with us

    ./dvpal_to_webm original_videos/your-save-with-us.mov video/your-save-with-us &&\
    ./dvpal_to_mp4 original_videos/your-save-with-us.mov video/your-save-with-us &&\
    ./dvpal_poster original_videos/your-save-with-us.mov 00:01:53.000 poster/your-save-with-us &&\

# trust us

#  Look at mp4 encoding very big must be the 'static' reduce to 100MB
#  webm looks a bit crap use 2000K as well
#  -ss 00:00:06.500

    ./dvpal_to_webm original_videos/trust-us/Trust-Us.mov video/trust-us &&\
    ./dvpal_to_mp4_con original_videos/trust-us/Trust-Us.mov video/trust-us &&\
    ./dvpal_poster original_videos/trust-us/Trust-Us.mov 00:03:06.000 poster/trust-us

# landscape zoom

# add `-vf reverse -an`

    ./dvpal_to_webm original_videos/landscape/minus25fpsnorm.mov video/zoom &&\
    ./dvpal_to_mp4_con original_videos/landscape/minus25fpsnorm.mov video/zoom &&\
    ./dvpal_poster original_videos/landscape/minus25fpsnorm.mov 00:03:06.000 poster/zoom

# futile games

    ./dvpal_futilegames video/futilegames
    ./dvpal_poster "../old_home_folder/TheGame_Other/TheGameGeneral/theGame_video/output/theGame-theGame-MPEG-2\ 6.2Mbps\ 2-pass\ 4:3.m2v" 00:00:17.000 poster/futilegames

