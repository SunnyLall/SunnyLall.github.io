{\rtf1\ansi\ansicpg1252\cocoartf1671\cocoasubrtf600
{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 background(0, 0, 0);\
var z = 1;\
var number = round(random(0.5,300.4)\
);\
for (var y = 1; y<=22; y++) \
\{\
    for (var x = 1; x<16; x++)\
    \{\
        if (number>0 && z<=number)\
        \{\
            fill(0, 255, 102);\
            text (z, x*28-21, y*18-5);\
            z++;\
        \}\
    \}\
\}\
}