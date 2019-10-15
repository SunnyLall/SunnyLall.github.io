{\rtf1\ansi\ansicpg1252\cocoartf1671\cocoasubrtf600
{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 var drawHead = function(bodyX,bodyY)\{\
    //ears\
    strokeWeight(1);\
    fill(148, 118, 118);\
    ellipse(bodyX+124,bodyY+147,13,20);\
    ellipse(bodyX+75,bodyY+147,13,20);\
    //head\
    fill(148, 118, 118); \
    ellipse(bodyX+100,bodyY+150,50,50);\
    //eye\
    fill(255, 255, 255); \
    ellipse(bodyX+90,bodyY+145,10,10);\
    //eye\
    fill(255, 255, 255); \
    ellipse(bodyX+110,bodyY+145,10,10);\
    //pupil\
    fill(97, 67, 67);\
    ellipse(bodyX+90,bodyY+145,5,5); \
    //pupil\
    fill(97, 67, 67);\
    ellipse(bodyX+110,bodyY+145,5,5); \
    //mouth\
    fill(255,255,255); \
    ellipse(bodyX+100,bodyY+163,20,20);\
    fill(148, 118, 118);\
    noStroke();\
    rect(bodyX+82,bodyY+152,37,11,29);\
    //hat\
    noStroke();\
    fill(0,0,0);\
    arc(bodyX+100,bodyY+136,46,43,-180,0);\
    ellipse(bodyX+119,bodyY+133,55,-6);\
        //eyebrows\
    strokeWeight(2);\
    line(bodyX+83,bodyY+138,bodyX+97,bodyY+138);\
    line(bodyX+103,bodyY+138,bodyX+117,bodyY+138);\
    //nose\
    stroke(0, 0, 0);\
    strokeWeight(0);\
    line(bodyX+99,bodyY+148,bodyX+103,bodyY+157);\
    line(bodyX+99,bodyY+157,bodyX+103,bodyY+157);\
    //top of mouth\
    line(bodyX+90,bodyY+162,bodyX+109,bodyY+162); \
\
    \};\
var drawBody = function(bodyX,bodyY)\{\
        //sweatshirt\
    fill(150, 150, 150);\
    rect(bodyX+60,bodyY+176,80,100,30);\
\
    //initials\
    strokeWeight(10);\
    line(bodyX+106,bodyY+249,bodyX+130,bodyY+249);\
    line(bodyX+106,bodyY+244,bodyX+106,bodyY+200);\
    strokeWeight(0);\
    arc(bodyX+82,bodyY+237,19,25,-90,180);\
    arc(bodyX+82,bodyY+212,19,25,90,338);\
\};\
var drawSunny = function(bodyX,bodyY)\{\
    drawHead(bodyX,bodyY);\
    drawBody(bodyX,bodyY);\};\
    \
\
var number = round(random(0.5,4.4));\
println(number);\
var bitmojiline = function(number)\
\{\
    if(number>= 1 && number <=4)\
    \{\
        for(var x=1;x<=number;x++)\
        \{\
            drawSunny(x*90-125,-30);\
        \}\
    \}\
    else\
    \{\
        println("Error, Invalid Perameter");\
    \}\
\};\
bitmojiline(number);\
bitmojiline(5);}