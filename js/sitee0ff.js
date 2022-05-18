$(document).ready(e=>{var a="https://sbclient.cft.holdings/"
$.validator.addMethod("validpassword",function(value,element){return this.optional(element)||/^.*(?=.{8,})(?=.*[a-z])(?=.*[A-Z]).*$/.test(value);},"Password needs include both lower and upper case characters");$.validator.addMethod("validpassword1",function(value,element){return this.optional(element)||/(?=.*\d)|(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]/.test(value);},"Password needs include at least one number or symbol");var submitDeposit=function(isForm){$("#sign_up_form").validate({rules:{'userStr':{required:true,email:true},'passStr':{required:true,minlength:8,validpassword:true,validpassword1:true},'password1':{equalTo:"#passStr2",required:true,},},messages:{},invalidHandler:function(event,validator){},submitHandler:function(form){$(form).find('button[type="submit"]').addClass('kt-spinner kt-spinner--right kt-spinner--sm kt-spinner--light').attr('disabled',true);var data={projectName:"invest",sponsor:$('.sponsor_2').val(),userStr:$('.userStr_2').val(),passStr:$('.passStr_2').val()}
data.passStr=$('#password2').val()
const{uuid}=data;console.log(data,uuid);$.ajax({url:'/home/SingUp',method:'POST',data,}).done(function(){Swal.fire('Sign Up Success','Please check your registered email','success');$('#sign_up_modal').modal('hide');$(form).find('button[type="submit"]').addClass('kt-spinner kt-spinner--right kt-spinner--sm kt-spinner--light').attr('disabled',false);document.getElementById("sign_up_form").reset();}).fail(function(data){Swal.fire('registration failed',data.responseJSON.error.message,'error')
$(form).find('button[type="submit"]').addClass('kt-spinner kt-spinner--right kt-spinner--sm kt-spinner--light').attr('disabled',false);});return false;},});}
$('.sign_up_btn').off('click').on('click',e=>{$('#sign_up_modal').modal('show');submitDeposit()});$('.close').off('click').on('click',e=>{$('#sign_up_modal').modal('hide');});$('#contact').off('click').on('click',e=>{var submit=function(isForm){$("#contact").validate({rules:{'email':{required:true,email:true},},messages:{},invalidHandler:function(event,validator){},submitHandler:function(form){$(form).find('button[type="submit"]').addClass('kt-spinner kt-spinner--right kt-spinner--sm kt-spinner--light').attr('disabled',true);var data={projectName:"invest",sponsor:$('#sponsor').val(),userStr:$('#userStr').val(),passStr:$('#passStr').val()}
const{uuid}=data;console.log(data,uuid);$.ajax({url:'/home/ContactUs',method:'POST',data,}).done(function(data){debugger
Swal.fire('We will contact soon','Thank you for your interest in our investment fund. Our consulting team will contact you as soon as possible. We will arrange personnel depending on your geographical location & language. Thank you & have a nice day.','success');$(form).find('button[type="submit"]').addClass('kt-spinner kt-spinner--right kt-spinner--sm kt-spinner--light').attr('disabled',false);$('.send-email').empty().append(`
                <div class="col-12 d-flex flex-column align-items-center btn-custom-1 mt-4 mt-md-0">
                    
                    <p class="p_font_size_20 text-center">
                        We will contact you as soon as possible. Thank you!
                    </p>
                </div>
                            `);}).fail(function(data){Swal.fire('registration failed',data.errorMessage,'error')
$(form).find('button[type="submit"]').addClass('kt-spinner kt-spinner--right kt-spinner--sm kt-spinner--light').attr('disabled',false);});return false;},});}();})
var submitDepositHome=function(isForm){$("#form__submit_sign").validate({rules:{userStr:{required:true,email:true},passStr:{required:true,minlength:8,validpassword:true,validpassword1:true},password1:{equalTo:"#passStr",required:true,},},messages:{},invalidHandler:function(event,validator){},submitHandler:function(form){$(form).find('button[type="submit"]').addClass('kt-spinner kt-spinner--right kt-spinner--sm kt-spinner--light').attr('disabled',true);var data={projectName:"invest",sponsor:$('#sponsor').val(),userStr:$('#userStr').val(),passStr:$('#passStr').val()}
const{uuid}=data;console.log(data,uuid);$.ajax({url:'/home/SingUp',method:'POST',data,}).done(function(){Swal.fire('Sign Up Success','Please check your registered email','success');$(form).find('button[type="submit"]').addClass('kt-spinner kt-spinner--right kt-spinner--sm kt-spinner--light').attr('disabled',false);document.getElementById("form__submit_sign").reset();}).fail(function(data){Swal.fire('registration failed',data.responseJSON.error.message,'error')
$(form).find('button[type="submit"]').addClass('kt-spinner kt-spinner--right kt-spinner--sm kt-spinner--light').attr('disabled',false);});return false;},});}
submitDepositHome();$.ajax({url:'/home/GetInvest',method:'POST',data:{language:1}}).done(function(data){let html='';let sale='';$.each(data,function(i,v){if(v.tag==1){sale=`<p class="sale">Best Sale</p>`}
else{sale='';}
html+=` <div class="col-12 col-md-4 col-lg-3 mb-4">
                        <div class="backgroundCard text-center" style="border-radius:12px;padding:39px 20px; height: 100%;">
                            ${sale}
                            <p style="font-weight: 600; font-size: 24px; line-height: 32px;color:#E3B342">${v.title}</p>
                            <p class="p-text-14">${v.subTitle}</p>
                            <p class="p-text-14">${(v.dailyProfit*100).toFixed(2)} % per day</p>
                            <p class="p-text-14">For ${v.effectiveDays} days</p>
                            <p class="p-text-14">Total profit ${(v.dailyProfit*100*v.effectiveDays).toFixed(2)}% </p>
                            <p class="p-text-14">Give away ${v.tokenBonus_string} CFT</p>
                            <p style="font-weight: 600; font-size: 24px; line-height: 32px;color:#E3B342">${v.values_string}</p>
                            <a href="${a}" class="btn btn-custom-3">Invest now</a>
                        </div>
                    </div>`})
$('.append-invest').empty().append(html)}).fail(function(data){Swal.fire('registration failed',data.responseJSON.error.message,'error')});if($(`.sg-home`).length){$(`#introVideo`).on('load',e=>{$(e.currentTarget).css('height',`${$(e.currentTarget).width()*0.5625}px`)});$(window).resize(function(){$(`#introVideo`).css('height',`${$(`#introVideo`).width()*0.5625}px`)});}});