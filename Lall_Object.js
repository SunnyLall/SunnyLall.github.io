{\rtf1\ansi\ansicpg1252\cocoartf1671\cocoasubrtf600
{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 var drawSunny = function(SunnyObject)\
\{\
    var bodyX = SunnyObject.x;\
    var bodyY = SunnyObject.y;\
    var Height = SunnyObject.h;\
    \
var drawHead = function()\{\
    //ears\
    strokeWeight(1);\
    fill(148, 118, 118);\
    ellipse(bodyX+(Height/100)*124,bodyY+(Height/100)*147,Height/100*13,Height/100*20);\
    ellipse(bodyX+(Height/100)*75,bodyY+(Height/100)*147,Height/100*13,Height/100*20);\
    //head\
    fill(148, 118, 118); \
    ellipse(bodyX+(Height/100)*100,bodyY+(Height/100)*150,Height/100*50,Height/100*50);\
    //eye\
    fill(255, 255, 255); \
    ellipse(bodyX+(Height/100)*90,bodyY+(Height/100)*145,Height/100*10,Height/100*10);\
    //eye\
    fill(255, 255, 255); \
    ellipse(bodyX+(Height/100)*110,bodyY+(Height/100)*145,Height/100*10,Height/100*10);\
    //pupil\
    fill(97, 67, 67);\
    ellipse(bodyX+(Height/100)*90,bodyY+(Height/100)*145,Height/100*5,Height/100*5); \
    //pupil\
    fill(97, 67, 67);\
    ellipse(bodyX+(Height/100)*110,bodyY+(Height/100)*145,Height/100*5,Height/100*5); \
    //mouth\
    fill(255,255,255); \
    ellipse(bodyX+(Height/100)*100,bodyY+(Height/100)*163,Height/100*20,Height/100*20);\
    fill(148, 118, 118);\
    noStroke();\
    rect(bodyX+(Height/100)*82,bodyY+(Height/100)*152,Height/100*37,Height/100*11,Height/100*29);\
    //hat\
    noStroke();\
    fill(0,0,0);\
    arc(bodyX+(Height/100)*100,bodyY+(Height/100)*136,Height/100*46,Height/100*43,-180,0);\
    ellipse(bodyX+(Height/100)*119,bodyY+(Height/100)*133,Height/100*55,Height/100*-6);\
        //eyebrows\
    strokeWeight(2);\
    line(bodyX+(Height/100)*83,bodyY+(Height/100)*138,bodyX+(Height/100)*97,bodyY+(Height/100)*138);\
    line(bodyX+(Height/100)*103,bodyY+(Height/100)*138,bodyX+(Height/100)*117,bodyY+(Height/100)*138);\
    //nose\
    stroke(0, 0, 0);\
    strokeWeight(0);\
    line(bodyX+(Height/100)*99,bodyY+(Height/100)*148,bodyX+(Height/100)*103,bodyY+(Height/100)*157);\
    line(bodyX+(Height/100)*99,bodyY+(Height/100)*157,bodyX+(Height/100)*103,bodyY+(Height/100)*157);\
    //top of mouth\
    line(bodyX+(Height/100)*90,bodyY+(Height/100)*162,bodyX+(Height/100)*109,bodyY+(Height/100)*162); \
\
    \};\
    drawHead();\
    \
var drawBody = function()\{\
       //sweatshirt\
    fill(SunnyObject.Shirtcolor);\
    rect(bodyX+(Height/100)*60,bodyY+(Height/100)*176,Height/100*80,Height/100*100,30);\
\
    if (SunnyObject.initials === true)\{\
    //initials\
    strokeWeight(10);\
    line(bodyX+(Height/100)*106,bodyY+(Height/100)*249,bodyX+(Height/100)*130,bodyY+(Height/100)*249);\
    line(bodyX+(Height/100)*106,bodyY+(Height/100)*244,bodyX+(Height/100)*106,bodyY+(Height/100)*200);\
    strokeWeight(0);\
    arc(bodyX+(Height/100)*82,bodyY+(Height/100)*237,Height/100*19,Height/100*25,-90,180);\
    arc(bodyX+(Height/100)*82,bodyY+(Height/100)*212,Height/100*19,Height/100*25,90,338);\}\
\};\
drawBody();\
\};\
drawSunny(\
    \{\
        x:-9,\
        y:-3,\
        h:92,\
        Shirtcolor:color(158, 29, 158),\
        initials: false\
    \}\
);\
drawSunny(\
    \{\
        x:221,\
        y:60,\
        h:110,\
        Shirtcolor:color(93, 105, 179),\
        initials: true\
    \}\
);}