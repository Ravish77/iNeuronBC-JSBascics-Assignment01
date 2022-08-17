let year = 1704;

if(((year%4==0)&&(year%100!=0))|| (year%400==0))
{
    console.log(year+ " is a Leap year");
}
else
    console.log(year+ " is Not a Leap year");